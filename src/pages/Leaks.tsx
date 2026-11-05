import type { Game } from '../types.ts'
import { causeCounts, fatigueSlope, postLossGap, byKey, tagCounts, overallWin, easyWin, mistakeCount } from '../lib/stats.ts'
import { CAUSES } from '../data/tags.ts'
import { pct, Thumb } from '../components.tsx'
import { idFromLabel, type Leader, type Meta } from '../lib/cards.ts'

const MIN = 10

function Bar({ v, max, tone }: { v: number; max: number; tone?: string }) {
  return <span className="bar"><i className={tone} style={{ width: `${max ? (v / max) * 100 : 0}%` }} /></span>
}

export default function Leaks({ games, leaders, meta }: { games: Game[]; leaders: Leader[] | null; meta: Meta | null }) {
  if (games.length === 0) {
    return (
      <>
        <header className="page-head"><h1>Leaks</h1><p className="lede">No games yet. Log some and your patterns show up here.</p></header>
        <a className="link" href="#log">Log a game</a>
      </>
    )
  }
  const counts = causeCounts(games)
  const cmax = Math.max(...CAUSES.map(c => counts[c]), 1)
  const tags = tagCounts(games).filter(t => t.n > 0).sort((a, b) => b.n - a.n)
  const tmax = Math.max(...tags.map(t => t.n), 1)
  const matchups = byKey(games, g => g.oppDeck)
  const order = byKey(games, g => g.turn)
  const slope = fatigueSlope(games)
  const gap = postLossGap(games)
  const mpg = games.reduce((n, g) => n + mistakeCount(g), 0) / games.length
  const varShare = (() => { const all = games.reduce((n, g) => n + g.tags.length, 0); const v = games.reduce((n, g) => n + g.tags.filter(t => t === 'VAR').length, 0); return all ? v / all : null })()
  const thin = games.length < MIN
  // field win rate of your most played deck against each opponent, from the Limitless matrix
  const mainId = idFromLabel(byKey(games, g => g.myDeck)[0]?.key ?? '')
  const mi = meta?.leaders.findIndex(l => l.id === mainId) ?? -1
  const fieldVs = (oppId?: string) => { const j = meta?.leaders.findIndex(l => l.id === oppId) ?? -1; const c = mi >= 0 && j >= 0 ? meta?.matrix[mi][j] : null; return c && c[1] >= 5 ? c : null }
  const short = (s: string) => s.split(' \u00b7 ')[0]

  const rows: [string, string, string, boolean | null][] = [
    ['Fatigue: mistakes per game in rounds 6+ vs 1-3', slope === null ? 'no data' : slope.toFixed(2) + 'x', 'target 1.2x or less', slope === null ? null : slope <= 1.2],
    ['Tilt: win rate after a loss vs overall', gap === null ? 'no data' : (gap >= 0 ? '+' : '') + gap.toFixed(0) + ' pts', 'target within 10 pts', gap === null ? null : gap > -10],
    ['Overconfidence: win rate in rounds tagged easy', pct(easyWin(games)), 'compare with overall ' + pct(overallWin(games)), null],
    ['Mistakes per game (variance excluded)', mpg.toFixed(2), 'should fall over time', null],
    ['Variance share of tags', pct(varShare), 'should stay stable', null],
  ]

  return (
    <>
      <header className="page-head">
        <h1>Leaks</h1>
        <p className="lede">{games.length} games. {thin && `Under ${MIN} games, so treat everything below as noise.`}</p>
      </header>

      <section>
        <h2>Root causes</h2>
        <ul className="plain bars">
          {[...CAUSES].sort((a, b) => counts[b] - counts[a]).map(c => (
            <li key={c}><span>{c}</span><Bar v={counts[c]} max={cmax} tone="red" /><b>{counts[c]}</b></li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Consistency scorecard</h2>
        <table>
          <tbody>
            {rows.map(([name, val, tgt, ok]) => (
              <tr key={name}>
                <td>{name}</td>
                <td className={'num ' + (ok === null ? '' : ok ? 'good' : 'bad')}>{val}</td>
                <td className="muted">{tgt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Tags</h2>
        {tags.length === 0 ? <p className="muted">No tags yet. Tagging is what makes this page useful.</p> : (
          <ul className="plain bars">
            {tags.map(t => <li key={t.id}><span>{t.label}</span><Bar v={t.n} max={tmax} tone={t.variance ? 'green' : 'red'} /><b>{t.n}</b></li>)}
          </ul>
        )}
      </section>

      <section className="split">
        <div>
          <h2>Matchups</h2>
          <table>
            <thead><tr><th>Opponent</th><th className="num">Record</th><th className="num">Win</th>{mi >= 0 && <th className="num" title="Field win rate of your most played deck">Field</th>}</tr></thead>
            <tbody>
              {matchups.map(m => <tr key={m.key}><td><span className="vs"><Thumb id={idFromLabel(m.key)} leaders={leaders} size={26} />{short(m.key)}{m.n < 5 && <span className="muted"> · small sample</span>}</span></td><td className="num">{m.w}-{m.n - m.w}</td><td className="num">{pct(m.pct)}</td>{mi >= 0 && (() => { const f = fieldVs(idFromLabel(m.key)); return <td className="num muted">{f ? Math.round(f[0] / f[1] * 100) + '%' : 'n/a'}</td> })()}</tr>)}
            </tbody>
          </table>
        </div>
        <div>
          <h2>Turn order</h2>
          <table>
            <tbody>
              {order.map(m => <tr key={m.key}><td>Went {m.key}</td><td className="num">{m.w}-{m.n - m.w}</td><td className="num">{pct(m.pct)}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
