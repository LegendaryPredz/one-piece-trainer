import { useEffect, useState } from 'react'
import type { Game } from './types.ts'
import { useStored } from './lib/store.ts'
import { useData, type Leader, type Meta } from './lib/cards.ts'
import Today from './pages/Today.tsx'
import Log from './pages/Log.tsx'
import Leaks from './pages/Leaks.tsx'
import Routines from './pages/Routines.tsx'
import Train from './pages/Train.tsx'
import Playbook from './pages/Playbook.tsx'
import DeckLab from './pages/DeckLab.tsx'
import Library from './pages/Library.tsx'

const PAGES = [
  ['today', 'Today'],
  ['log', 'Log'],
  ['leaks', 'Leaks'],
  ['train', 'Train'],
  ['playbook', 'Playbook'],
  ['routines', 'Routines'],
  ['deck', 'Deck lab'],
  ['library', 'Library'],
] as const
type Id = (typeof PAGES)[number][0]

const read = (): Id => {
  const h = location.hash.slice(1)
  return (PAGES.find(p => p[0] === h)?.[0] ?? 'today') as Id
}

export default function App() {
  const [page, setPage] = useState<Id>(read)
  const [games, setGames] = useStored<Game[]>('opt.games', [])
  const [eventDate, setEventDate] = useStored<string>('opt.event', '')
  const [eventName, setEventName] = useStored<string>('opt.eventName', '')
  const leaders = useData<Leader[]>('leaders.json')
  const meta = useData<Meta>('meta.json')
  const rank = Object.fromEntries((meta?.leaders ?? []).map((l, i) => [l.id, i]))

  useEffect(() => {
    const on = () => { setPage(read()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  return (
    <div className="shell">
      <nav className="rail" aria-label="Main">
        <a className="brand" href="#today">Log Pose</a>
        {PAGES.map(([id, label]) => (
          <a key={id} href={'#' + id} className={id === page ? 'on' : ''} aria-current={id === page ? 'page' : undefined}>{label}</a>
        ))}
      </nav>
      <main>
        {page === 'today' && <Today games={games} eventDate={eventDate} eventName={eventName} setEventDate={setEventDate} setEventName={setEventName} />}
        {page === 'log' && <Log games={games} setGames={setGames} eventName={eventName} leaders={leaders} rank={rank} />}
        {page === 'leaks' && <Leaks games={games} leaders={leaders} meta={meta} />}
        {page === 'train' && <Train leaders={leaders} rank={rank} />}
        {page === 'playbook' && <Playbook />}
        {page === 'routines' && <Routines />}
        {page === 'deck' && <DeckLab games={games} leaders={leaders} meta={meta} rank={rank} />}
        {page === 'library' && <Library />}
      </main>
    </div>
  )
}
