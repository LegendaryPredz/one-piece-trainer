import { useEffect, useMemo, useRef, useState } from 'react'
import { LeaderPicker, Thumb } from '../components.tsx'
import { useStored, today } from '../lib/store.ts'
import { idFromLabel, type Leader } from '../lib/cards.ts'
import { makeQuestion, isCorrect, type Q } from '../lib/flash.ts'

type Puzzle = { id: string; title: string; source: string; mine: string; opp: string; situation: string; question: string; answer: string; box: number; due: string; solved: number; missed: number }
const SOURCES = ['My own game', 'Pro VOD', 'Coaching or guide notes', 'Practice partner', 'Made up']
const INTERVALS = [1, 3, 7, 14, 30] // days until a puzzle comes back, by box
const addDays = (n: number) => new Date(Date.now() + n * 86400000).toISOString().slice(0, 10)
const TEMPLATE = 'Turn: \nMy life / their life: \nMy DON / their DON: \nMy hand: \nMy board: \nTheir board: \nWhat I know about their hand (counters seen, searched cards): \nTrash that matters: '

const PROMPTS = [
  'Find lethal: they have no blockers, you have 3 attackers and 9 DON. Which order, and where does each DON go?',
  'Survive: they threaten two attackers next turn. Which counters do you refuse to spend now?',
  'Keep or mulligan this opening hand into the mirror, going second.',
  'Their turn 5 play was a surprise. What does it tell you about their hand?',
  'Choose: hit the board or hit face, and name the card that decides it.',
  'You are behind on searchers. Does your game plan change, and which cards in hand change value?',
]

function Flash() {
  const [hist, setHist] = useStored<{ day: string; ok: boolean; kind: string }[]>('opt.flash', [])
  const [q, setQ] = useState<Q>(() => makeQuestion())
  const [val, setVal] = useState('')
  const [res, setRes] = useState<null | boolean>(null)
  const [round, setRound] = useState(0)
  const input = useRef<HTMLInputElement>(null)
  const todayN = hist.filter(h => h.day === today()).length
  const recent = hist.slice(-30)
  const acc = recent.length ? Math.round((recent.filter(h => h.ok).length / recent.length) * 100) : null
  const weak = useMemo(() => {
    const m: Record<string, [number, number]> = {}
    for (const h of hist) { const r = (m[h.kind] ??= [0, 0]); r[1]++; if (h.ok) r[0]++ }
    return Object.entries(m).filter(([, [, n]]) => n >= 3).sort((a, b) => a[1][0] / a[1][1] - b[1][0] / b[1][1])[0]
  }, [hist])

  const check = (e: React.FormEvent) => {
    e.preventDefault()
    const x = parseFloat(val)
    if (Number.isNaN(x) || res !== null) return
    const ok = isCorrect(q, x)
    setRes(ok); setHist(h => [...h.slice(-199), { day: today(), ok, kind: q.kind }])
  }
  const next = () => { setQ(makeQuestion()); setVal(''); setRes(null); setRound(r => r + 1); setTimeout(() => input.current?.focus(), 0) }

  return (
    <section>
      <p className="serif">Number flash is a daily five-minute drill of the odds and counter math you use mid-game, so you stop estimating them. Answer from your head first. The explanation shows the working.</p>
      <div className="flash">
        <p className="muted">{todayN} answered today. Aim for 5. {acc !== null && <>Last 30: {acc}% correct.</>} {weak && <>Weakest so far: {weak[0]}.</>}</p>
        <form key={round} onSubmit={check}>
          <p className="q">{q.text}</p>
          <div className="row">
            <input ref={input} autoFocus inputMode="decimal" aria-label="Your answer" placeholder={q.unit === '%' ? 'Percent' : q.unit === 'K' ? 'Thousands' : 'Number'} value={val} onChange={e => setVal(e.target.value)} disabled={res !== null} />
            {res === null ? <button className="primary" type="submit">Check</button> : <button className="primary" type="button" onClick={next} autoFocus>Next question</button>}
          </div>
          {res !== null && (
            <p role="status" className={'verdict ' + (res ? 'good' : 'bad')}>
              {res ? 'Correct.' : `Answer: ${q.answer}${q.unit === '%' ? '%' : q.unit === 'K' ? 'K' : ''}.`} <span className="muted">{q.why}</span>
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Puzzles({ leaders, rank }: { leaders: Leader[] | null; rank: Record<string, number> }) {
  const [list, setList] = useStored<Puzzle[]>('opt.puzzles', [])
  const [mode, setMode] = useState<'queue' | 'build'>('queue')
  const [draft, setDraft] = useState<Partial<Puzzle>>({ source: SOURCES[0], situation: TEMPLATE })
  const [solving, setSolving] = useState<Puzzle | null>(null)
  const [mine, setMine] = useState('')
  const [shown, setShown] = useState(false)
  const [secs, setSecs] = useState(180)

  const due = list.filter(p => p.due <= today())
  useEffect(() => {
    if (!solving || shown) return
    const t = setInterval(() => setSecs(s => s - 1), 1000)
    return () => clearInterval(t)
  }, [solving, shown])

  const start = (p: Puzzle) => { setSolving(p); setMine(''); setShown(false); setSecs(180) }
  const grade = (ok: boolean) => {
    if (!solving) return
    const box = ok ? Math.min(solving.box + 1, INTERVALS.length - 1) : 0
    setList(l => l.map(p => p.id === solving.id ? { ...p, box, due: addDays(INTERVALS[box]), solved: p.solved + (ok ? 1 : 0), missed: p.missed + (ok ? 0 : 1) } : p))
    setSolving(null)
  }
  const save = (e: React.FormEvent) => {
    e.preventDefault()
    if (!draft.title?.trim() || !draft.question?.trim() || !draft.answer?.trim()) return
    setList(l => [...l, { id: crypto.randomUUID(), title: draft.title!.trim(), source: draft.source ?? SOURCES[0], mine: draft.mine ?? '', opp: draft.opp ?? '', situation: (draft.situation ?? '').trim(), question: draft.question!.trim(), answer: draft.answer!.trim(), box: 0, due: today(), solved: 0, missed: 0 }])
    setDraft({ source: draft.source, situation: TEMPLATE }); setMode('queue')
  }

  if (solving) {
    return (
      <section>
        <div className="head-row"><h2>{solving.title}</h2><span className={'timer' + (secs < 0 ? ' over' : '')}>{secs >= 0 ? `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}` : 'Over time'}</span></div>
        <p className="vs"><Thumb id={idFromLabel(solving.mine)} leaders={leaders} size={30} /><strong>{solving.mine.split(' · ')[0] || 'You'}</strong> vs <Thumb id={idFromLabel(solving.opp)} leaders={leaders} size={30} /><strong>{solving.opp.split(' · ')[0] || 'Opponent'}</strong></p>
        <pre className="situation">{solving.situation}</pre>
        <p className="q">{solving.question}</p>
        <label>Your line, in full<textarea rows={4} value={mine} onChange={e => setMine(e.target.value)} placeholder="Write the whole line and what you expect them to do" disabled={shown} /></label>
        {!shown ? <p><button className="primary" onClick={() => setShown(true)}>Reveal the answer</button> <button className="ghost" onClick={() => setSolving(null)}>Back</button></p> : (
          <>
            <h2 className="gap">Reference answer</h2>
            <pre className="situation">{solving.answer}</pre>
            <div className="row"><button className="primary" onClick={() => grade(true)}>I matched it</button><button onClick={() => grade(false)}>I missed it</button></div>
            <p className="muted">A match comes back in {INTERVALS[Math.min(solving.box + 1, INTERVALS.length - 1)]} days. A miss comes back tomorrow.</p>
          </>
        )}
      </section>
    )
  }

  return (
    <section>
      <p className="serif">A puzzle is one frozen decision from a real game: the board, what you know, and a question. You solve it on a clock, check it against a reference line, and missed ones return on a schedule. There is no public bank of OPTCG puzzles yet, so the fast way to get them is to build your own from games you already play.</p>
      <div className="row tight"><button aria-pressed={mode === 'queue'} onClick={() => setMode('queue')}>Solve ({due.length} due)</button><button aria-pressed={mode === 'build'} onClick={() => setMode('build')}>Build a puzzle</button></div>

      {mode === 'build' ? (
        <form className="form" onSubmit={save}>
          <label>Title<input value={draft.title ?? ''} onChange={e => setDraft({ ...draft, title: e.target.value })} placeholder="Short name, like Rocks mirror T5 survive" required /></label>
          <div className="row">
            <LeaderPicker label="My leader" value={draft.mine ?? ''} onChange={v => setDraft({ ...draft, mine: v })} leaders={leaders} rank={rank} />
            <LeaderPicker label="Their leader" value={draft.opp ?? ''} onChange={v => setDraft({ ...draft, opp: v })} leaders={leaders} rank={rank} />
          </div>
          <label>Where it came from
            <select value={draft.source} onChange={e => setDraft({ ...draft, source: e.target.value })}>{SOURCES.map(s => <option key={s}>{s}</option>)}</select>
          </label>
          <label>Situation<textarea rows={8} value={draft.situation ?? ''} onChange={e => setDraft({ ...draft, situation: e.target.value })} /></label>
          <label>Question<textarea rows={2} value={draft.question ?? ''} onChange={e => setDraft({ ...draft, question: e.target.value })} placeholder="Find lethal, or: what do you do this turn and why?" required /></label>
          <label>Reference answer and why<textarea rows={4} value={draft.answer ?? ''} onChange={e => setDraft({ ...draft, answer: e.target.value })} placeholder="The best line from review, a stronger player, or a long solve" required /></label>
          <div className="row actions"><button className="primary" type="submit">Save puzzle</button></div>
        </form>
      ) : (
        <>
          {list.length === 0 && <p className="muted">No puzzles yet. Build your first one from the last turn you were unsure about.</p>}
          {due.length > 0 && <div className="row"><button className="primary" onClick={() => start(due[0])}>Start the next due puzzle</button></div>}
          <ul className="plain puzzles">
            {[...list].sort((a, b) => a.due.localeCompare(b.due)).map(p => (
              <li key={p.id}>
                <div><strong>{p.title}</strong><div className="muted">{p.source} · solved {p.solved}, missed {p.missed} · {p.due <= today() ? 'due now' : `due ${p.due}`}</div></div>
                <div className="row tight"><button onClick={() => start(p)}>Solve</button><button className="ghost" aria-label={`Delete ${p.title}`} onClick={() => confirm('Delete this puzzle?') && setList(l => l.filter(x => x.id !== p.id))}>Delete</button></div>
              </li>
            ))}
          </ul>
        </>
      )}

      <h2 className="gap">Where to find spots</h2>
      <ul className="plain finds">
        <li><strong>Your own games.</strong> After each session, pick the one turn where you hesitated or lost the game and build it. This is the best source because you already know the context.</li>
        <li><strong>Top-cut VODs.</strong> Pause at the start of a turn and note the board. The player's actual line is your reference answer. Official channels are linked in the Library.</li>
        <li><strong>Coaching notes and guides.</strong> Their worked turns are ready-made puzzles. Copy the position in your own words, not the text.</li>
        <li><strong>A practice partner.</strong> Each of you brings one position per week and swaps.</li>
        <li><strong>The sim.</strong> In OPTCGSim, play to turn 4 to 6 against a friend, stop, and write the position down.</li>
      </ul>
      <h2 className="gap">Prompts to start from</h2>
      <ul className="plain finds">{PROMPTS.map(p => <li key={p}>{p}</li>)}</ul>
    </section>
  )
}

export default function Train({ leaders, rank }: { leaders: Leader[] | null; rank: Record<string, number> }) {
  const [tab, setTab] = useState<'flash' | 'puzzles'>('flash')
  return (
    <>
      <header className="page-head">
        <h1>Train</h1>
        <p className="lede">Short drills for the two things that decide close games: odds and decisions.</p>
      </header>
      <div className="row tight tabs" role="tablist">
        <button role="tab" aria-selected={tab === 'flash'} aria-pressed={tab === 'flash'} onClick={() => setTab('flash')}>Number flash</button>
        <button role="tab" aria-selected={tab === 'puzzles'} aria-pressed={tab === 'puzzles'} onClick={() => setTab('puzzles')}>Puzzles</button>
      </div>
      {tab === 'flash' ? <Flash /> : <Puzzles leaders={leaders} rank={rank} />}
    </>
  )
}
