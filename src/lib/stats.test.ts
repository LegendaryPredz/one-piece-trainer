import assert from 'node:assert/strict'
import type { Game } from '../types.ts'
import { causeCounts, topCause, fatigueSlope, postLossGap } from './stats.ts'

const g = (o: Partial<Game>): Game => ({
  id: String(Math.random()), at: 0, event: 'E', round: 1, myDeck: 'A', oppDeck: 'B',
  turn: 'first', result: 'W', tags: [], easy: false, note: '', ...o,
})

// overconfidence only counts when the round was tagged easy
assert.equal(causeCounts([g({ tags: ['MR-Hand'] })]).Overconfidence, 0)
assert.equal(causeCounts([g({ tags: ['MR-Hand'], easy: true })]).Overconfidence, 1)
// variance is not a mistake and has no cause
assert.equal(topCause([g({ tags: ['VAR'] })]), null)
assert.equal(topCause([g({ tags: ['STATE-tilt', 'STATE-tilt', 'PREP'] })]), 'Tilt')
// fatigue slope: late 2 mistakes/game vs early 1 -> 2
assert.equal(fatigueSlope([g({ round: 1, tags: ['PREP'] }), g({ round: 6, tags: ['PREP', 'PREP'] })]), 2)
assert.equal(fatigueSlope([g({ round: 1, tags: ['PREP'] })]), null)
// post-loss gap: L then W -> after-loss win 100%, overall 50% -> +50pp; across events does not count
assert.equal(postLossGap([g({ at: 1, result: 'L' }), g({ at: 2, result: 'W' })]), 50)
assert.equal(postLossGap([g({ at: 1, result: 'L', event: 'X' }), g({ at: 2, result: 'W' })]), null)
console.log('stats ok')
