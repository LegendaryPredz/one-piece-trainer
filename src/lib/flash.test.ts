import assert from 'node:assert/strict'
import { atLeastOne, counterNeeded, makeQuestion, isCorrect } from './flash.ts'

assert.equal(Math.round(atLeastOne(4, 50, 5) * 100), 35) // 4-of in opening 5
assert.equal(Math.round(atLeastOne(1, 50, 5) * 100), 10)
assert.equal(counterNeeded(7000, 5000), 3000) // 7K into 5K needs 3K
assert.equal(counterNeeded(4000, 5000), 0)
let seed = 7
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
for (let i = 0; i < 300; i++) { const q = makeQuestion(rnd); assert.ok(Number.isFinite(q.answer)); assert.ok(isCorrect(q, q.answer)) }
console.log('flash ok')
