import { useId, useMemo, useState, type ReactNode } from 'react'
import { COLOR_HEX, idFromLabel, leaderLabel, type Leader } from './lib/cards.ts'
import { CAUSES, type Cause } from './data/tags.ts'

export function Compass({ focus }: { focus: Cause | null }) {
  const n = CAUSES.length
  const angle = focus ? (CAUSES.indexOf(focus) / n) * 360 : 0
  const pt = (i: number, r: number) => {
    const a = ((i / n) * 360 - 90) * (Math.PI / 180)
    return [200 + r * Math.cos(a), 200 + r * Math.sin(a)]
  }
  return (
    <svg className="compass" viewBox="-50 -10 500 420" role="img" aria-label={focus ? `Log pose pointing at ${focus}` : 'Log pose with no data yet'}>
      <circle cx="200" cy="200" r="150" className="c-ring" />
      <circle cx="200" cy="200" r="118" className="c-ring thin" />
      {Array.from({ length: 72 }, (_, i) => {
        const a = (i * 5 - 90) * (Math.PI / 180)
        const long = i % 6 === 0
        return <line key={i} x1={200 + 150 * Math.cos(a)} y1={200 + 150 * Math.sin(a)} x2={200 + (long ? 138 : 144) * Math.cos(a)} y2={200 + (long ? 138 : 144) * Math.sin(a)} className="c-tick" />
      })}
      {CAUSES.map((c, i) => {
        const [x, y] = pt(i, 188)
        return (
          <text key={c} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className={'c-label' + (c === focus ? ' on' : '')}>{c}</text>
        )
      })}
      <g className={'needle' + (focus ? '' : ' idle')} style={{ transform: `rotate(${angle}deg)` }}>
        <polygon points="200,62 212,200 188,200" className="n-head" />
        <polygon points="200,338 212,200 188,200" className="n-tail" />
      </g>
      <circle cx="200" cy="200" r="9" className="c-hub" />
    </svg>
  )
}

export function Check({ done, onToggle, children }: { done: boolean; onToggle: () => void; children: ReactNode }) {
  return (
    <label className={'check' + (done ? ' done' : '')}>
      <input type="checkbox" checked={done} onChange={onToggle} />
      <span>{children}</span>
    </label>
  )
}

export const pct = (x: number | null, digits = 0) => (x === null ? 'no data' : (x * 100).toFixed(digits) + '%')

export function Thumb({ id, leaders, size = 36 }: { id?: string; leaders: Leader[] | null; size?: number }) {
  const l = id ? leaders?.find(x => x.id === id) : undefined
  const style = { width: size, height: size }
  if (l?.art) return <span className="thumb" style={style}><img src={`${import.meta.env.BASE_URL}leaders/${l.id}.jpg`} alt="" loading="lazy" /></span>
  const c = l?.colors.map(x => COLOR_HEX[x]).filter(Boolean) ?? []
  const bg = c.length > 1 ? `linear-gradient(135deg, ${c[0]} 50%, ${c[1]} 50%)` : c[0] ?? 'var(--rule)'
  return <span className="thumb blank" style={{ ...style, background: bg }} aria-hidden="true" />
}

type ComboProps = { label: string; value: string; onChange: (v: string) => void; leaders: Leader[] | null; rank?: Record<string, number>; placeholder?: string; required?: boolean }

/** Searchable leader picker. Free text is still allowed so non-leader labels like "Mirror" work. */
export function LeaderPicker({ label, value, onChange, leaders, rank = {}, placeholder, required }: ComboProps) {
  const uid = useId()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const results = useMemo(() => {
    const q = value.toLowerCase().split(/\s+/).filter(Boolean)
    const pool = (leaders ?? []).filter(l => { const hay = `${l.name} ${l.id} ${l.colors.join(' ')} ${l.set}`.toLowerCase(); return q.every(t => hay.includes(t)) })
    // current meta leaders first, then newest sets
    return pool.sort((a, b) => (rank[a.id] ?? 99) - (rank[b.id] ?? 99) || b.id.localeCompare(a.id)).slice(0, 40)
  }, [value, leaders, rank])
  const pick = (l: Leader) => { onChange(leaderLabel(l)); setOpen(false) }
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); setActive(a => Math.min(a + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(a => Math.max(a - 1, 0)) }
    else if (e.key === 'Enter' && open && results[active]) { e.preventDefault(); pick(results[active]) }
    else if (e.key === 'Escape') setOpen(false)
  }
  return (
    <div className="picker">
      <label htmlFor={uid}>{label}</label>
      <div className="picker-field">
        <Thumb id={idFromLabel(value)} leaders={leaders} size={32} />
        <input id={uid} role="combobox" aria-expanded={open} aria-controls={uid + '-list'} aria-autocomplete="list" aria-activedescendant={open && results[active] ? `${uid}-${results[active].id}` : undefined}
          value={value} placeholder={placeholder} required={required} autoComplete="off"
          onChange={e => { onChange(e.target.value); setOpen(true); setActive(0) }}
          onFocus={() => setOpen(true)} onBlur={() => setTimeout(() => setOpen(false), 120)} onKeyDown={onKey} />
      </div>
      {open && results.length > 0 && (
        <ul id={uid + '-list'} role="listbox" className="picker-list">
          {results.map((l, i) => (
            <li key={l.id} id={`${uid}-${l.id}`} role="option" aria-selected={i === active} className={i === active ? 'on' : ''} onMouseDown={e => { e.preventDefault(); pick(l) }} onMouseEnter={() => setActive(i)}>
              <Thumb id={l.id} leaders={leaders} size={36} />
              <span><strong>{l.name}</strong><small>{l.id}{l.colors.length ? ' · ' + l.colors.join('/') : ''}</small></span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
