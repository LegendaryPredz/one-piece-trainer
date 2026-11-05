// Number-flash question generator. Every answer is computed, never typed in by hand.
export type Q = { kind: string; text: string; answer: number; unit: '%' | 'K' | 'cards' | ''; tol: number; why: string }

const C = (n: number, k: number) => { if (k < 0 || k > n) return 0; let r = 1; for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i; return r }
/** P(at least one of `copies` cards among the first `drawn` of a `deck`-card deck). */
export const atLeastOne = (copies: number, deck: number, drawn: number) => 1 - C(deck - copies, drawn) / C(deck, drawn)
/** Counter needed so a defender of power d survives an attacker of power a (attacker wins ties). */
export const counterNeeded = (a: number, d: number) => (a >= d ? a - d + 1000 : 0)

const pick = <T,>(xs: T[], r: () => number) => xs[Math.floor(r() * xs.length)]
const pct = (x: number) => Math.round(x * 100)

export function makeQuestion(r: () => number = Math.random): Q {
  const kind = pick(['opening', 'bytrn', 'life', 'nolife', 'counter', 'cards', 'expected'], r)
  if (kind === 'opening') {
    const k = pick([1, 2, 3, 4], r)
    const p = atLeastOne(k, 50, 5)
    return { kind, text: `You run ${k} ${k === 1 ? 'copy' : 'copies'} of a card in a 50-card deck. What is the chance it is in your opening 5 cards?`, answer: pct(p), unit: '%', tol: 3, why: `1 minus the chance all 5 cards miss: 1 - C(${50 - k},5)/C(50,5) = ${pct(p)}%.` }
  }
  if (kind === 'bytrn') {
    const k = pick([3, 4], r), t = pick([2, 3, 4], r), first = r() < 0.5
    const seen = 5 + (first ? t - 1 : t)
    const p = atLeastOne(k, 50, seen)
    return { kind, text: `${k} copies of a searcher in 50 cards. Going ${first ? 'first' : 'second'}, what is the chance you have seen one by your turn ${t}? (Ignore DON and mulligans.)`, answer: pct(p), unit: '%', tol: 3, why: `${first ? 'First player skips the turn-1 draw' : 'Second player draws on turn 1'}, so you have seen ${seen} cards: 1 - C(${50 - k},${seen})/C(50,${seen}) = ${pct(p)}%.` }
  }
  if (kind === 'life') {
    const k = pick([6, 8, 10, 12], r)
    const p = atLeastOne(k, 50, 5)
    return { kind, text: `Your deck has ${k} triggers in 50 cards. What is the chance at least one of your 5 life cards is a trigger?`, answer: pct(p), unit: '%', tol: 3, why: `Life is set from the top of the deck, so it behaves like a random 5-card draw: 1 - C(${50 - k},5)/C(50,5) = ${pct(p)}%.` }
  }
  if (kind === 'nolife') {
    const k = pick([6, 8, 10], r), n = pick([2, 3, 4], r)
    const p = C(50 - k, n) / C(50, n)
    return { kind, text: `The opponent runs ${k} triggers in 50 cards. You hit their life ${n} times with no known information. Chance none of those ${n} cards is a trigger?`, answer: pct(p), unit: '%', tol: 3, why: `C(${50 - k},${n})/C(50,${n}) = ${pct(p)}%. Use this when deciding whether a wide attack is safe.` }
  }
  if (kind === 'counter') {
    const a = pick([6, 7, 8, 9, 10, 11], r) * 1000, d = pick([5, 6, 7], r) * 1000
    const need = counterNeeded(a, d)
    return { kind, text: `A ${a / 1000}K attacker swings at your ${d / 1000}K target. Smallest total counter (in K) that saves it?`, answer: need / 1000, unit: 'K', tol: 0, why: `The attacker wins ties, so you need power above ${a / 1000}K: ${a / 1000} - ${d / 1000} + 1 = ${need / 1000}K.` }
  }
  if (kind === 'cards') {
    const a = pick([6, 7, 8, 9, 10], r) * 1000, d = 5000
    const need = counterNeeded(a, d), cards = Math.ceil(need / 2000)
    return { kind, text: `A ${a / 1000}K attacker hits a ${d / 1000}K leader. Your counters are 1K or 2K. Minimum number of cards you must spend?`, answer: cards, unit: 'cards', tol: 0, why: `You need ${need / 1000}K of counter, and a card gives at most 2K: ceil(${need / 1000}/2) = ${cards}. This is why 7K into a 5K leader costs two cards.` }
  }
  const k = pick([14, 16, 18, 20], r)
  const e = (5 * k) / 50
  return { kind, text: `An opponent runs ${k} counter cards in 50. On average, how many counters are in their 5-card opening hand?`, answer: Math.round(e * 10) / 10, unit: '', tol: 0.3, why: `5 x ${k}/50 = ${e.toFixed(1)}. Compare it with what you see them spend.` }
}

export const isCorrect = (q: Q, x: number) => Math.abs(x - q.answer) <= q.tol + 1e-9
