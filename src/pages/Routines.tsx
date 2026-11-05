import { Check } from '../components.tsx'
import { useStored } from '../lib/store.ts'
import { PRE_PASS, BEFORE_ATTACK, MORNING, BETWEEN, TIMELINE, DEBRIEF, WEEKS } from '../data/routines.ts'

function useChecks(key: string) {
  const [done, setDone] = useStored<string[]>(key, [])
  return { done, toggle: (id: string) => setDone(d => (d.includes(id) ? d.filter(x => x !== id) : [...d, id])), reset: () => setDone([]) }
}

export default function Routines() {
  const pre = useChecks('opt.pre')
  const morn = useChecks('opt.morning')
  const btw = useChecks('opt.between')
  return (
    <>
      <header className="page-head">
        <h1>Routines</h1>
        <p className="lede">Checklists you can run from your phone at an event. Ticks are saved on this device; reset when you start a new turn or round.</p>
      </header>

      <section>
        <div className="head-row"><h2>Before you pass</h2><button className="ghost" onClick={pre.reset}>Reset</button></div>
        <p className="muted">{BEFORE_ATTACK}</p>
        {PRE_PASS.map(p => <Check key={p.id} done={pre.done.includes(p.id)} onToggle={() => pre.toggle(p.id)}><strong>{p.k}.</strong> {p.q}</Check>)}
      </section>

      <section className="split">
        <div>
          <div className="head-row"><h2>Between rounds</h2><button className="ghost" onClick={btw.reset}>Reset</button></div>
          {BETWEEN.map(b => <Check key={b.id} done={btw.done.includes(b.id)} onToggle={() => btw.toggle(b.id)}><strong>{b.k}.</strong> {b.t}</Check>)}
        </div>
        <div>
          <div className="head-row"><h2>Event morning</h2><button className="ghost" onClick={morn.reset}>Reset</button></div>
          {MORNING.map(m => <Check key={m.id} done={morn.done.includes(m.id)} onToggle={() => morn.toggle(m.id)}>{m.t}</Check>)}
        </div>
      </section>

      <section>
        <h2>Prep timeline</h2>
        <ol className="timeline">
          {TIMELINE.map(t => <li key={t.id}><b>{t.label}</b><span className="serif">{t.tasks}</span></li>)}
        </ol>
        <p className="muted">{DEBRIEF}</p>
      </section>

      <section>
        <h2>Weekly plans</h2>
        {WEEKS.map(w => (
          <details key={w.name}>
            <summary><strong>{w.name}</strong> <span className="muted">{w.hours} a week</span></summary>
            <table><tbody>{w.days.map(([d, s, t]) => <tr key={d}><td>{d}</td><td>{s}</td><td className="num muted">{t}</td></tr>)}</tbody></table>
            <p className="muted">{w.note}</p>
          </details>
        ))}
      </section>
    </>
  )
}
