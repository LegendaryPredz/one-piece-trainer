import { useEffect, useState } from 'react'

export type Leader = { id: string; name: string; colors: string[]; set: string; art: boolean }
export type Meta = {
  asOf: string; windowDays: number; events: number; entries: number
  leaders: { id: string; name: string; share: number; n: number; win: number | null }[]
  matrix: ([number, number] | null)[][] // [wins, games] of row leader vs column leader
}

export const COLOR_HEX: Record<string, string> = { Red: '#c0392b', Green: '#2e8b57', Blue: '#2a6fb0', Purple: '#7d4db0', Black: '#2b2b33', Yellow: '#e0b32b' }

const cache = new Map<string, Promise<unknown>>()
function load<T>(file: string): Promise<T> {
  if (!cache.has(file)) cache.set(file, fetch(`${import.meta.env.BASE_URL}data/${file}`).then(r => { if (!r.ok) throw new Error(file); return r.json() }))
  return cache.get(file) as Promise<T>
}
/** Loads a static JSON file once per session. Returns null while loading or if it is missing. */
export function useData<T>(file: string): T | null {
  const [d, setD] = useState<T | null>(null)
  useEffect(() => { let on = true; load<T>(file).then(x => on && setD(x), () => {}); return () => { on = false } }, [file])
  return d
}

export const leaderLabel = (l: Pick<Leader, 'id' | 'name'>) => `${l.name} · ${l.id}`
export const idFromLabel = (s: string) => /\b([A-Z]{2,3}\d{2}-\d{3})\b/.exec(s)?.[1]
