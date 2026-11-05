import type { Game } from '../types.ts'
import { TAGS, CAUSES, type Cause } from '../data/tags.ts'

const tagInfo = (id: string) => TAGS.find(t => t.id === id)
const isMistake = (id: string) => !tagInfo(id)?.variance

export const mistakeCount = (g: Game) => g.tags.filter(isMistake).length

/** Which root causes are the tags pointing at. Hand/role misreads in rounds tagged easy count as overconfidence. */
export function causeCounts(games: Game[]): Record<Cause, number> {
  const out = Object.fromEntries(CAUSES.map(c => [c, 0])) as Record<Cause, number>
  for (const g of games) {
    for (const t of g.tags) {
      const c = tagInfo(t)?.cause
      if (c) out[c]++
      else if (g.easy && (t === 'MR-Hand' || t === 'MR-Role')) out.Overconfidence++
    }
  }
  return out
}

export const topCause = (games: Game[]): Cause | null => {
  const c = causeCounts(games)
  const best = CAUSES.reduce((a, b) => (c[b] > c[a] ? b : a))
  return c[best] > 0 ? best : null
}

const winPct = (gs: Game[]) => (gs.length ? gs.filter(g => g.result === 'W').length / gs.length : null)

/** Mistakes per game in rounds 6+ divided by rounds 1-3. Null until both buckets have games. */
export function fatigueSlope(games: Game[]): number | null {
  const early = games.filter(g => g.round <= 3)
  const late = games.filter(g => g.round >= 6)
  if (!early.length || !late.length) return null
  const rate = (gs: Game[]) => gs.reduce((n, g) => n + mistakeCount(g), 0) / gs.length
  const e = rate(early)
  return e === 0 ? null : rate(late) / e
}

/** Win rate right after a loss (same event) minus overall win rate, in percentage points. */
export function postLossGap(games: Game[]): number | null {
  const sorted = [...games].sort((a, b) => a.at - b.at)
  const after: Game[] = []
  sorted.forEach((g, i) => {
    const p = sorted[i - 1]
    if (p && p.event === g.event && p.result === 'L') after.push(g)
  })
  const a = winPct(after)
  const all = winPct(games)
  return a === null || all === null ? null : (a - all) * 100
}

export function byKey(games: Game[], key: (g: Game) => string) {
  const m = new Map<string, { w: number; n: number }>()
  for (const g of games) {
    const k = key(g)
    if (!k) continue
    const r = m.get(k) ?? { w: 0, n: 0 }
    r.n++
    if (g.result === 'W') r.w++
    m.set(k, r)
  }
  return [...m.entries()].map(([k, r]) => ({ key: k, ...r, pct: r.w / r.n })).sort((a, b) => b.n - a.n)
}

export const tagCounts = (games: Game[]) =>
  TAGS.map(t => ({ ...t, n: games.reduce((s, g) => s + (g.tags.includes(t.id) ? 1 : 0), 0) }))

export const overallWin = winPct
export const easyWin = (games: Game[]) => winPct(games.filter(g => g.easy))
