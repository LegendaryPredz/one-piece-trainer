import type { Game } from '../types.ts'
import { Compass, Check } from '../components.tsx'
import { topCause, causeCounts } from '../lib/stats.ts'
import { FIXES } from '../data/tags.ts'
import { DAILY, TIMELINE, DEBRIEF } from '../data/routines.ts'
import { OP18_RELEASE } from '../data/field.ts'
import { daysUntil, today, useStored } from '../lib/store.ts'

type P = { games: Game[]; eventDate: string; eventName: string; setEventDate: (s: string) => void; setEventName: (s: string) => void }

export default function Today({ games, eventDate, eventName, setEventDate, setEventName }: P) {
  const focus = topCause(games)
  const counts = causeCounts(games)
  const [daily, setDaily] = useStored<{ day: string; done: string[] }>('opt.daily', { day: today(), done: [] })
  const done = daily.day === today() ? daily.done : []
  const toggle = (id: string) => setDaily({ day: today(), done: done.includes(id) ? done.filter(x => x !== id) : [...done, id] })

  const d = eventDate ? daysUntil(eventDate) : null
  const phase = d === null ? null : d < 0 ? null : TIMELINE.find(t => d >= t.from && d <= t.to) ?? (d > 21 ? null : TIMELINE[0])
  const op18 = daysUntil(OP18_RELEASE)

  return (
    <>
      <header className="page-head">
        <h1>{focus ? `Point at ${focus.toLowerCase()}` : 'Log ten games to set your bearing'}</h1>
        <p className="lede">
          {focus
            ? <>The needle follows the root cause your tagged mistakes point at most ({counts[focus]} tags across {games.length} games).</>
            : <>The compass reads your match log. It has {games.length} {games.length === 1 ? 'game' : 'games'} so far. Tag your mistakes after each one and it will turn.</>}
        </p>
      </header>

      <section className="today-grid">
        <div className="compass-wrap"><Compass focus={focus} /></div>
        <div className="stack">
          {focus ? (
            <div className="focus">
              <h2>This week's fix</h2>
              <p className="serif">{FIXES[focus].fix}</p>
              <a className="link" href={FIXES[focus].href}>Open {FIXES[focus].where.toLowerCase()}</a>
            </div>
          ) : (
            <div className="focus">
              <h2>Start with the pre-pass check</h2>
              <p className="serif">It is the cheapest habit with the biggest effect on the mistakes that cost strong players games. Run it before every pass.</p>
              <a className="link" href="#routines">Open the check</a>
            </div>
          )}

          <div>
            <h2>Ten minutes today</h2>
            {DAILY.map(x => <Check key={x.id} done={done.includes(x.id)} onToggle={() => toggle(x.id)}>{x.t}</Check>)}
          </div>
        </div>
      </section>

      <section className="split">
        <div>
          <h2>Next event</h2>
          <div className="row">
            <input aria-label="Event name" placeholder="Event name" value={eventName} onChange={e => setEventName(e.target.value)} />
            <input aria-label="Event date" type="date" value={eventDate} onChange={e => setEventDate(e.target.value)} />
          </div>
          {d === null && <p className="muted">Set a date and this page tells you which prep phase you are in.</p>}
          {d !== null && d < 0 && <p className="serif">{DEBRIEF}</p>}
          {d !== null && d >= 0 && (
            <>
              <p className="big">{d === 0 ? 'Today' : `${d} ${d === 1 ? 'day' : 'days'}`}<span> to {eventName || 'the event'}</span></p>
              {phase ? <p className="serif"><strong>{phase.label}.</strong> {phase.tasks}</p> : <p className="serif">More than three weeks out. Build your field model and shortlist decks.</p>}
            </>
          )}
        </div>
        <div>
          <h2>OP18</h2>
          <p className="big">{op18 > 0 ? `${op18} days` : op18 === 0 ? 'Today' : 'Out'}<span> {op18 > 0 ? 'until release' : ''}</span></p>
          <p className="serif">Released {OP18_RELEASE}. OPTCGSim already has some OP18 cards. Run the new-deck pipeline on the leaders you expect to play.</p>
          <a className="link" href="#deck">Open the deck lab</a>
        </div>
      </section>
    </>
  )
}
