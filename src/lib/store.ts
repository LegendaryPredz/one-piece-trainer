import { useEffect, useState } from 'react'

// localStorage can throw (private window, blocked storage); fall back to in-memory state.
export function useStored<T>(key: string, init: T) {
  const [v, setV] = useState<T>(() => {
    try {
      const s = localStorage.getItem(key)
      return s ? (JSON.parse(s) as T) : init
    } catch {
      return init
    }
  })
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(v)) } catch { /* in-memory only */ }
  }, [key, v])
  return [v, setV] as const
}

export const today = () => new Date().toISOString().slice(0, 10)
export const daysUntil = (iso: string) => Math.round((new Date(iso + 'T00:00:00').getTime() - new Date(today() + 'T00:00:00').getTime()) / 86400000)
