import { useRef, useState } from 'react'
import type { Game } from '../types.ts'
import { TAGS } from '../data/tags.ts'
import { LeaderPicker, Thumb } from '../components.tsx'
import { idFromLabel, type Leader } from '../lib/cards.ts'

type P = { games: Game[]; setGames: (f: (g: Game[]) => Game[]) => void; eventName: string; leaders: Leader[] | null; rank: Record<string, number> }

const short = (s: string) => s.split(' · ')[0]

export default function Log({ games, setGames, eventName, leaders, rank }: P) {
  const last = games[games.length - 1]
  const [event, setEvent] = useState(last?.event ?? eventName)
  const [round, setRound] = useState(last ? last.round + (last.event === event ? 1 : 0) : 1)
  const [myDeck, setMyDeck] = useState(last?.myDeck ?? '')
  const [oppDeck, setOppDeck] = useState('')
  const [turn, setTurn] = useState<Game['turn']>('first')
  const [result, setResult] = useState<Game['result']>('W')
  const [tags, setTags] = useState<string[]>([])
  const [easy, setEasy] = useState(false)
  const [note, setNote] = useState('')
  const [msg, setMsg] = useState('')
  const file = useRef<HTMLInputElement>(null)

  const save = (e: React.FormEvent) => {
    e.preventDefault()
    if (!myDeck.trim() || !oppDeck.trim()) return
    setGames(gs => [...gs, { id: crypto.randomUUID(), at: Date.now(), event: event.trim(), round, myDeck: myDeck.trim(), oppDeck: oppDeck.trim(), turn, result, tags, easy, note: note.trim() }])
    setRound(r => r + 1); setOppDeck(''); setTags([]); setEasy(false); setNote(''); setMsg('Game saved')
  }

  const exportJson = () => {
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob([JSON.stringify(games, null, 2)], { type: 'application/json' }))
    a.download = `opt-log-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(a.href)
  }
  const importJson = async (f?: File) => {
    if (!f) return
    try {
      const data = JSON.parse(await f.text())
      if (!Array.isArray(data) || data.some(g => typeof g?.id !== 'string' || !['W', 'L'].includes(g.result))) throw new Error()
      setGames(gs => { const ids = new Set(gs.map(g => g.id)); return [...gs, ...(data as Game[]).filter(g => !ids.has(g.id))] })
      setMsg('Imported')
    } catch { setMsg('That file is not a game log export') }
  }

  return (
    <>
      <header className="page-head">
        <h1>Log a game</h1>
        <p className="lede">Takes about two minutes. Tag what went wrong while it is fresh; the Leaks page counts them.</p>
      </header>

      <form onSubmit={save} className="form">
        <div className="row">
          <label>Event<input value={event} onChange={e => setEvent(e.target.value)} placeholder="Event or session" /></label>
          <label className="narrow">Round<input type="number" min={1} value={round} onChange={e => setRound(+e.target.value || 1)} /></label>
        </div>
        <div className="row">
          <LeaderPicker label="My deck" value={myDeck} onChange={setMyDeck} leaders={leaders} rank={rank} placeholder="Search leaders" required />
          <LeaderPicker label="Opponent's deck" value={oppDeck} onChange={setOppDeck} leaders={leaders} rank={rank} placeholder="Search leaders" required />
        </div>
        <div className="row">
          <fieldset className="seg"><legend>Turn order</legend>
            {(['first', 'second'] as const).map(t => <button type="button" key={t} aria-pressed={turn === t} onClick={() => setTurn(t)}>{t === 'first' ? 'Went first' : 'Went second'}</button>)}
          </fieldset>
          <fieldset className="seg"><legend>Result</legend>
            <button type="button" aria-pressed={result === 'W'} className="win" onClick={() => setResult('W')}>Win</button>
            <button type="button" aria-pressed={result === 'L'} className="loss" onClick={() => setResult('L')}>Loss</button>
          </fieldset>
        </div>
        <fieldset className="tags"><legend>What went wrong</legend>
          {TAGS.map(t => (
            <button type="button" key={t.id} title={t.hint} aria-pressed={tags.includes(t.id)} onClick={() => setTags(x => x.includes(t.id) ? x.filter(i => i !== t.id) : [...x, t.id])}>{t.label}</button>
          ))}
        </fieldset>
        <label className="inline"><input type="checkbox" checked={easy} onChange={e => setEasy(e.target.checked)} /> I went in thinking this was an easy round</label>
        <label>Note<textarea rows={2} value={note} onChange={e => setNote(e.target.value)} placeholder="The turn that decided it, in one sentence" /></label>
        <div className="row actions">
          <button className="primary" type="submit">Save game</button>
          <span role="status" className="muted">{msg}</span>
        </div>
      </form>

      <section>
        <div className="head-row">
          <h2>{games.length} {games.length === 1 ? 'game' : 'games'} logged</h2>
          <div className="row tight">
            <button onClick={exportJson} disabled={!games.length}>Export</button>
            <button onClick={() => file.current?.click()}>Import</button>
            <input ref={file} type="file" accept="application/json" hidden onChange={e => { importJson(e.target.files?.[0]); e.target.value = '' }} />
          </div>
        </div>
        {games.length === 0 && <p className="muted">Nothing here yet. Your first game goes in the form above.</p>}
        <ul className="plain games">
          {[...games].reverse().slice(0, 60).map(g => (
            <li key={g.id}>
              <span className={'res ' + (g.result === 'W' ? 'w' : 'l')}>{g.result}</span>
              <div>
                <span className="vs"><Thumb id={idFromLabel(g.myDeck)} leaders={leaders} size={26} /><strong>{short(g.myDeck)}</strong> vs <Thumb id={idFromLabel(g.oppDeck)} leaders={leaders} size={26} /><strong>{short(g.oppDeck)}</strong></span>
                <span className="muted"> · {g.turn === 'first' ? 'first' : 'second'}{g.event ? ` · ${g.event} R${g.round}` : ''}</span>
                {g.tags.length > 0 && <div className="chips">{g.tags.map((t, i) => <span key={t + i}>{t}</span>)}</div>}
                {g.note && <div className="muted">{g.note}</div>}
              </div>
              <button className="ghost" aria-label={`Delete game vs ${g.oppDeck}`} onClick={() => confirm('Delete this game?') && setGames(gs => gs.filter(x => x.id !== g.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
