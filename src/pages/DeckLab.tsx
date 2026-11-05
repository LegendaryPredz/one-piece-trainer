import React from 'react'
import { useState } from 'react'
import type { Game } from '../types.ts'
import { Check, LeaderPicker, Thumb, pct } from '../components.tsx'
import { useStored } from '../lib/store.ts'
import { PIPELINE } from '../data/routines.ts'
import { BAN_NOTE } from '../data/field.ts'
import { byKey } from '../lib/stats.ts'
import { idFromLabel, type Leader, type Meta } from '../lib/cards.ts'

type P = { games: Game[]; leaders: Leader[] | null; meta: Meta | null; rank: Record<string, number> }
const short = (s: string) => s.split(' \u00b7 ')[0]

function Matrix({ meta, leaders }: { meta: Meta; leaders: Leader[] | null }) {
  const n = Math.min(8, meta.leaders.length)
  const cell = (c: [number, number] | null) => {
    if (!c || c[1] === 0) return <td className="mx none">n/a</td>
    const p = c[0] / c[1]
    const alpha = Math.min(1, 0.15 + Math.abs(p - 0.5) * 1.6) * (c[1] < 5 ? 0.45 : 1)
    const bg = p >= 0.5 ? `rgba(46,139,122,${alpha})` : `rgba(207,63,54,${alpha})`
    return <td className="mx" style={{ background: bg }} title={`${c[0]}-${c[1] - c[0]}`}>{Math.round(p * 100)}<small>{c[1]}</small></td>
  }
  return (
    <div className="scroll">
      <table className="matrix">
        <thead><tr><th><span className="muted">row vs column</span></th>{meta.leaders.slice(0, n).map(l => <th key={l.id} title={l.name}><Thumb id={l.id} leaders={leaders} size={30} /></th>)}</tr></thead>
        <tbody>
          {meta.leaders.slice(0, n).map((r, i) => (
            <tr key={r.id}><th><span className="vs"><Thumb id={r.id} leaders={leaders} size={26} />{r.name}</span></th>{meta.matrix[i].slice(0, n).map((c, j) => i === j ? <td key={j} className="mx self">mirror<small>{c ? c[1] : 0}</small></td> : <React.Fragment key={j}>{cell(c)}</React.Fragment>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function DeckLab({ games, leaders, meta, rank }: P) {
  const [deck, setDeck] = useState('')
  const [progress, setProgress] = useStored<Record<string, string[]>>('opt.pipeline', {})
  const key = deck.trim().toLowerCase()
  const done = progress[key] ?? []
  const toggle = (id: string) => key && setProgress(p => ({ ...p, [key]: done.includes(id) ? done.filter(x => x !== id) : [...done, id] }))
  const mine = byKey(games, g => g.myDeck)
  const started = Object.entries(progress).filter(([, v]) => v.length > 0)

  return (
    <>
      <header className="page-head">
        <h1>Deck lab</h1>
        <p className="lede">Learn a deck in about 12 to 15 hours, with an exit test for every stage. A deck is main only after 200 registered games.</p>
      </header>

      <section>
        <h2>New-deck pipeline</h2>
        <div className="grow"><LeaderPicker label="Deck you are learning" value={deck} onChange={setDeck} leaders={leaders} rank={rank} placeholder="Search leaders, for example Karoo or Nico Robin" /></div>
        {!key && <p className="muted">Pick a leader to track its progress. New leaders from OP18 appear here once the card list refreshes.</p>}
        <ol className="pipeline">
          {PIPELINE.map(p => (
            <li key={p.id} className={done.includes(p.id) ? 'done' : ''}>
              <Check done={done.includes(p.id)} onToggle={() => toggle(p.id)}><strong>{p.name}</strong> <span className="muted">{p.time}</span></Check>
              <p className="serif">{p.does}.</p>
              <p className="exit"><em>Done when:</em> {p.exit}.</p>
            </li>
          ))}
        </ol>
        {started.length > 0 && (
          <>
            <h2>In progress</h2>
            <ul className="plain progress">
              {started.map(([k, v]) => (
                <li key={k}><button className="linkish" onClick={() => setDeck(k)}><span className="vs"><Thumb id={idFromLabel(k.toUpperCase())} leaders={leaders} size={30} />{short(k)}</span></button><span className="muted">{v.length} of {PIPELINE.length} stages</span></li>
              ))}
            </ul>
          </>
        )}
      </section>

      <section>
        <h2>Your decks</h2>
        {mine.length === 0 ? <p className="muted">Log games and your record per deck shows up here.</p> : (
          <table>
            <thead><tr><th>Deck</th><th className="num">Games</th><th className="num">Win</th><th className="num">To main</th></tr></thead>
            <tbody>{mine.map(m => <tr key={m.key}><td><span className="vs"><Thumb id={idFromLabel(m.key)} leaders={leaders} size={26} />{short(m.key)}</span></td><td className="num">{m.n}</td><td className="num">{pct(m.pct)}</td><td className="num muted">{Math.max(0, 200 - m.n)}</td></tr>)}</tbody>
          </table>
        )}
      </section>

      <section>
        <h2>The field</h2>
        {!meta ? <p className="muted">Meta data did not load. Run <code>node scripts/refresh-data.mjs</code> or reload.</p> : (
          <>
            <p className="muted">Limitless Play online events, last {meta.windowDays} days up to {meta.asOf}: {meta.events} events, {meta.entries} entries. Mostly EU and online, so check a second source before locking a list.</p>
            <table>
              <thead><tr><th>Leader</th><th className="num">Share</th><th className="num">Match win</th></tr></thead>
              <tbody>{meta.leaders.map(f => <tr key={f.id}><td><span className="vs"><Thumb id={f.id} leaders={leaders} size={28} />{f.name} <small className="muted">{f.id}</small></span></td><td className="num">{f.share}%</td><td className="num">{f.win === null ? 'n/a' : f.win + '%'}</td></tr>)}</tbody>
            </table>
            <h2 className="gap">Matchups in the field</h2>
            <p className="muted">Win rate of the row leader against the column leader, with games played underneath. Faded cells have fewer than 5 games.</p>
            <Matrix meta={meta} leaders={leaders} />
          </>
        )}
        <p className="serif">{BAN_NOTE}</p>
        <p><a className="link" href="https://play.limitlesstcg.com/decks?game=OP" target="_blank" rel="noreferrer">Limitless Play</a> <a className="link" href="https://en.onepiece-cardgame.com/news/restriction.html" target="_blank" rel="noreferrer">Official ban list</a></p>
      </section>
    </>
  )
}
