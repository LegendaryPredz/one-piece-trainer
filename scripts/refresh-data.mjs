// Refreshes public/data/leaders.json (optcgapi + Limitless) and public/data/meta.json (Limitless Play API).
// Usage: node scripts/refresh-data.mjs [--images]   (--images downloads + shrinks missing leader art; needs macOS `sips`)
// Both APIs are public and keyless. Limitless allows 50 requests per 5 minutes, so calls honour its ratelimit header.
import { writeFile, readFile, mkdir, access } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'

const LIMITLESS = 'https://play.limitlesstcg.com/api'
const WINDOW_DAYS = 21
const MIN_PLAYERS = 16
const wantImages = process.argv.includes('--images')
const metaOnly = process.argv.includes('--meta-only') // CI: refresh the field data, keep the committed leaders and art
const leadersOnly = process.argv.includes('--leaders-only') // reuse existing meta.json, skip the Limitless crawl
const sleep = ms => new Promise(r => setTimeout(r, ms))

async function getJson(url, tries = 4) {
  for (let i = 0; i < tries; i++) {
    const res = await fetch(url, { headers: { 'user-agent': 'one-piece-trainer personal project' } })
    const rl = /r=(\d+);\s*t=(\d+)/.exec(res.headers.get('ratelimit') ?? '')
    if (res.status === 429) { await sleep(65_000); continue }
    if (!res.ok) throw new Error(`${res.status} ${url}`)
    const data = await res.json()
    if (rl && +rl[1] <= 2) await sleep(+rl[2] * 1000) // nearly out of budget: wait for the window to reset
    else await sleep(400)
    return data
  }
  throw new Error('rate limited: ' + url)
}

// ---- meta -----------------------------------------------------------------
async function buildMeta() {
  const since = Date.now() - WINDOW_DAYS * 86400000
  const all = await getJson(`${LIMITLESS}/tournaments?game=OP&limit=200`)
  const events = all.filter(t => !t.format && t.players >= MIN_PLAYERS && Date.parse(t.date) >= since)
  const leaders = new Map() // id -> {id,name,n,w,l}
  const pair = new Map() // "a|b" -> {w,n} a's wins vs b
  let entries = 0

  for (const ev of events) {
    const [standings, pairings] = await Promise.all([
      getJson(`${LIMITLESS}/tournaments/${ev.id}/standings`),
      getJson(`${LIMITLESS}/tournaments/${ev.id}/pairings`),
    ])
    const byPlayer = new Map()
    for (const s of standings) {
      const id = s.deck?.id
      if (!id) continue
      byPlayer.set(s.player ?? s.name, id)
      const L = leaders.get(id) ?? { id, name: s.deck.name, n: 0, w: 0, l: 0 }
      L.n++; L.w += s.record?.wins ?? 0; L.l += s.record?.losses ?? 0
      leaders.set(id, L); entries++
    }
    for (const p of pairings) {
      const a = byPlayer.get(p.player1), b = byPlayer.get(p.player2)
      if (!a || !b || !p.winner || (p.winner !== p.player1 && p.winner !== p.player2)) continue
      const aWon = p.winner === p.player1
      for (const [x, y, won] of [[a, b, aWon], [b, a, !aWon]]) {
        const k = x + '|' + y
        const r = pair.get(k) ?? { w: 0, n: 0 }
        r.n++; if (won) r.w++
        pair.set(k, r)
      }
    }
  }

  const top = [...leaders.values()].sort((a, b) => b.n - a.n).slice(0, 14)
  const ids = top.map(t => t.id)
  const matrix = ids.map(a => ids.map(b => {
    const r = pair.get(a + '|' + b)
    return r ? [r.w, r.n] : null
  }))
  return {
    asOf: new Date().toISOString().slice(0, 10),
    windowDays: WINDOW_DAYS,
    events: events.length,
    entries,
    leaders: top.map(t => ({ id: t.id, name: t.name, share: +(t.n / entries * 100).toFixed(1), n: t.n, win: t.w + t.l ? +(t.w / (t.w + t.l) * 100).toFixed(1) : null })),
    matrix, // matrix[i][j] = [wins, games] for leader i against leader j, same order as `leaders`
  }
}

// ---- leaders --------------------------------------------------------------
const clean = n => n.replace(/\s*\(\d+\)/, '').replace(/\s*\([^)]*\)/g, '').trim()

async function buildLeaders(meta) {
  const cards = await (await fetch('https://optcgapi.com/api/allSetCards/')).json()
  const map = new Map()
  const rows = cards.filter(c => c.card_type === 'Leader')
  // The base printing is named "Name (001)" with nothing else in brackets; variants (SPR, Alternate Art...) have extra tags.
  const isBase = c => /^[^()]*\(\d+\)$/.test(c.card_name)
  for (const c of rows) {
    if (map.has(c.card_set_id) && !(isBase(c) && !map.get(c.card_set_id).base)) continue
    map.set(c.card_set_id, { id: c.card_set_id, name: clean(c.card_name), colors: c.card_color.split(' '), set: c.card_set_id.split('-')[0], base: isBase(c), image: c.card_image ?? `https://optcg-api.arjunbansal-ai.workers.dev/images/${c.card_set_id}` })
  }
  // Leaders the card API lacks (new sets) come from Limitless; art via a public image proxy.
  for (const l of meta.leaders) {
    if (!map.has(l.id)) map.set(l.id, { id: l.id, name: l.name, colors: [], set: l.id.split('-')[0], image: `https://optcg-api.arjunbansal-ai.workers.dev/images/${l.id}` })
  }
  const list = [...map.values()].sort((a, b) => a.id.localeCompare(b.id))
  if (wantImages) {
    for (const l of list) {
      const out = `public/leaders/${l.id}.jpg`
      if (await access(out).then(() => true, () => false)) continue
      try {
        const res = await fetch(l.image)
        if (!res.ok) throw new Error(res.status)
        const tmp = `/tmp/${l.id}.src`
        await writeFile(tmp, Buffer.from(await res.arrayBuffer()))
        execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '60', '--resampleWidth', '120', tmp, '--out', out], { stdio: 'ignore' })
      } catch (e) { console.warn('no art for', l.id, e.message) }
      await sleep(120)
    }
  }
  // flag which leaders have art on disk so the UI can fall back to a color tile
  const out = []
  for (const l of list) out.push({ id: l.id, name: l.name, colors: l.colors, set: l.set, art: await access(`public/leaders/${l.id}.jpg`).then(() => true, () => false) })
  return out
}

await mkdir('public/data', { recursive: true })
await mkdir('public/leaders', { recursive: true })
const meta = leadersOnly ? JSON.parse(await readFile('public/data/meta.json', 'utf8')) : await buildMeta()
if (!leadersOnly) await writeFile('public/data/meta.json', JSON.stringify(meta))
console.log(`meta: ${meta.events} events, ${meta.entries} entries, top ${meta.leaders[0]?.name}`)
if (metaOnly) process.exit(0)
const leaders = await buildLeaders(meta)
await writeFile('public/data/leaders.json', JSON.stringify(leaders))
console.log(`leaders: ${leaders.length}, with art ${leaders.filter(l => l.art).length}`)
