import { useMemo, useState } from 'react'
import { CONCEPTS, DEBATES, GROUPS } from '../data/playbook.ts'

type Priv = { frameworks: { title: string; body: string[] }[]; deckGuide: { intro: string; sections: [string, string][]; decisions: string[] } }
// Optional private layer: absent in a public build, in which case these sections simply do not render.
const mods = import.meta.glob('../private/*.ts', { eager: true }) as Record<string, { PRIVATE?: Priv }>
const priv = Object.values(mods)[0]?.PRIVATE

export default function Playbook() {
  const [q, setQ] = useState('')
  const [group, setGroup] = useState<string>('All')
  const [open, setOpen] = useState<string | null>(null)
  const list = useMemo(() => {
    const t = q.toLowerCase().trim()
    return CONCEPTS.filter(c => (group === 'All' || c.group === group) && (!t || JSON.stringify(c).toLowerCase().includes(t)))
  }, [q, group])
  const start = CONCEPTS.filter(c => c.leverage)

  return (
    <>
      <header className="page-head">
        <h1>Playbook</h1>
        <p className="lede">The concepts that come up again and again in strong players' guides and in the research on how card-game players improve, in plain language. Start with the ones marked for consistency.</p>
      </header>

      <section>
        <h2>Start here</h2>
        <p className="muted">These six give the most return for a player whose problem is consistency.</p>
        <ul className="plain starts">
          {start.map(c => <li key={c.id}><a className="link" href={'#playbook'} onClick={e => { e.preventDefault(); setQ(''); setGroup('All'); setOpen(c.id); setTimeout(() => document.getElementById('c-' + c.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30) }}>{c.title}</a><span className="muted">{c.summary}</span></li>)}
        </ul>
      </section>

      <section>
        <div className="row filters">
          <label className="grow">Search<input type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Counter, DON, mulligan, tilt" /></label>
          <div className="row tight" role="group" aria-label="Filter by area">
            {['All', ...GROUPS].map(g => <button key={g} aria-pressed={group === g} onClick={() => setGroup(g)}>{g}</button>)}
          </div>
        </div>
        {list.length === 0 && <p className="muted">Nothing matches. Clear the search or choose All.</p>}
        <div className="concepts">
          {list.map(c => (
            <details key={c.id} id={'c-' + c.id} open={open === c.id} onToggle={e => { const o = (e.currentTarget as HTMLDetailsElement).open; setOpen(o ? c.id : open === c.id ? null : open) }}>
              <summary>
                <span className="t">{c.title}{c.leverage && <span className="badge">consistency</span>}</span>
                <span className="muted">{c.group}</span>
              </summary>
              <div className="concept">
                <p className="serif lead">{c.summary}</p>
                <p className="serif">{c.why}</p>
                <h3>The ideas</h3>
                <ul className="serif">{c.ideas.map(i => <li key={i}>{i}</li>)}</ul>
                <h3>Apply it</h3>
                <ol className="serif">{c.apply.map(i => <li key={i}>{i}</li>)}</ol>
                <h3>Common mistakes</h3>
                <ul className="serif">{c.mistakes.map(i => <li key={i}>{i}</li>)}</ul>
                <h3>Drill</h3>
                <p className="serif">{c.drill}</p>
                {c.tool && <p><a className="link" href={c.tool.href}>Open {c.tool.label.toLowerCase()}</a></p>}
              </div>
            </details>
          ))}
        </div>
      </section>

      {priv && (
        <>
          <section>
            <h2>Frameworks</h2>
            <p className="muted">Step-by-step methods from the guides, kept close to their own wording. Private to this device.</p>
            <div className="concepts">
              {priv.frameworks.map(f => (
                <details key={f.title}><summary><span className="t">{f.title}</span></summary><ul className="serif concept">{f.body.map(b => <li key={b}>{b}</li>)}</ul></details>
              ))}
            </div>
          </section>
          <section>
            <h2>How to read or write a deck guide</h2>
            <p className="serif">{priv.deckGuide.intro}</p>
            <ol className="plain tpl">{priv.deckGuide.sections.map(([t, d]) => <li key={t}><strong>{t}</strong><span className="serif">{d}</span></li>)}</ol>
            <h3>Decisions every good guide covers</h3>
            <ul className="serif">{priv.deckGuide.decisions.map(d => <li key={d}>{d}</li>)}</ul>
          </section>
        </>
      )}

      <section>
        <h2>Where strong players disagree</h2>
        <p className="muted">The sources do not agree on everything. Treat these as open questions to settle with your own data.</p>
        {DEBATES.map(d => (
          <div key={d.q} className="debate">
            <h3>{d.q}</h3>
            <ul className="serif">{d.views.map(v => <li key={v}>{v}</li>)}</ul>
          </div>
        ))}
      </section>
    </>
  )
}
