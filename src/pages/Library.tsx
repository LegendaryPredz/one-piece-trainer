import { PRINCIPLES, LINKS } from '../data/library.ts'
import { TAGS } from '../data/tags.ts'

export default function Library() {
  return (
    <>
      <header className="page-head">
        <h1>Library</h1>
        <p className="lede">What strong players' guides agree on, the mistake tags, and where to practice and watch.</p>
      </header>

      <section>
        <h2>Ten principles</h2>
        <ol className="principles">{PRINCIPLES.map(p => <li key={p} className="serif">{p}</li>)}</ol>
      </section>

      <section>
        <h2>Mistake tags</h2>
        <table><tbody>{TAGS.map(t => <tr key={t.id}><td><code>{t.id}</code></td><td>{t.hint}</td></tr>)}</tbody></table>
      </section>

      {LINKS.map(g => (
        <section key={g.group}>
          <h2>{g.group}</h2>
          <ul className="plain links">
            {g.items.map(i => <li key={i.url}><a className="link" href={i.url} target="_blank" rel="noreferrer">{i.name}</a><span className="muted">{i.use}</span></li>)}
          </ul>
        </section>
      ))}
    </>
  )
}
