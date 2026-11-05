// Content distilled from research/concepts.md (sections 2.1, 4.3, 4.4, 6.1, 8).
export const PRE_PASS = [
  { id: 'life', k: 'Life', q: "What's their max damage next turn: attackers, Rush, available DON, likely searches? Am I dead to it?" },
  { id: 'counters', k: 'Counters', q: 'Which counters must I not spend this turn to survive the next one?' },
  { id: 'triggers', k: 'Triggers', q: 'Did I attack into life with a known trigger profile? Am I exposed to a trigger blowout?' },
  { id: 'don', k: 'DON', q: 'Is any DON unspent or unattached that had a use?' },
  { id: 'board', k: 'Board', q: 'Is every On Play, When Attacking and Activate: Main effect used or skipped on purpose? Blockers placed?' },
]
export const BEFORE_ATTACK = 'Before the first attack: do I have lethal under worst-case counters? Do they?'

export const MORNING = [
  { id: 'm1', t: 'Re-read your tilt map and the three process goals' },
  { id: 'm2', t: 'Warm up: 5 number-flash cards and 2 puzzles' },
  { id: 'm3', t: 'Breathing reset: 4 seconds in, 6 out, six times' },
]
export const BETWEEN = [
  { id: 'b1', k: 'Log', t: 'Result, A/B/C rating, one tag, one sentence. 90 seconds.' },
  { id: 'b2', k: 'Let go', t: "Six slow breaths. “Next game is 0-0.”" },
  { id: 'b3', k: 'Fuel', t: 'Water and a snack. Short walk if time allows.' },
  { id: 'b4', k: 'Focus', t: "When pairings post, read the cheat-sheet line for their likely deck: role, mulligan, what to save counters for." },
]
export const DAILY = [
  { id: 'd1', t: '5 number-flash cards' },
  { id: 'd2', t: '3 puzzles' },
  { id: 'd3', t: 'One line in the log: what I will do differently next game' },
]

export const TIMELINE: { id: string; from: number; to: number; label: string; tasks: string }[] = [
  { id: 't21', from: 14, to: 21, label: 'T-21 to T-14', tasks: 'Field model v1. Shortlist 2 or 3 decks. Run the new-deck pipeline for anything unfamiliar.' },
  { id: 't14', from: 8, to: 13, label: 'T-14 to T-8', tasks: 'Gauntlet testing, one question per session. Review hard matchups with a partner.' },
  { id: 't7', from: 7, to: 7, label: 'T-7', tasks: 'Deck lock. Field model v2. Print the matchup cheat sheet. Up to 2 flex slots may change by T-3, only for a written reason.' },
  { id: 't6', from: 2, to: 6, label: 'T-6 to T-2', tasks: 'Daily 20-minute puzzle set, plus 2 or 3 practice games on the real clock. Shift your sleep schedule if the start time differs.' },
  { id: 't1', from: 1, to: 1, label: 'T-1', tasks: 'No new lists, no late testing. Pack the kit. Cheat sheets for 30 minutes at most. In bed at least 7.5 hours.' },
  { id: 't0', from: 0, to: 0, label: 'Event day', tasks: 'Morning routine, then the between-round reset after every game.' },
]
export const DEBRIEF = 'T+1 to T+3: journal summary, VOD your 3 losses and 2 close wins, update the mistake chart.'

export const PIPELINE = [
  { id: 'p1', name: 'Read', does: 'Card text, leader ability, top lists, written guides', exit: 'Recite the leader ability and the 10 key cards from memory', time: '1 h' },
  { id: 'p2', name: 'Math', does: 'Fill the deck math sheet: openers, searchers, counters, triggers', exit: 'Sheet printed', time: '30 min' },
  { id: 'p3', name: 'Goldfish', does: '20 solo games, curve audit', exit: 'Median curve and mulligan guide written', time: '1 h' },
  { id: 'p4', name: 'Watch', does: 'Pause, predict, reveal on 2 or 3 top-player VODs', exit: 'Agree with the pilot 70% or more on DON allocation and attack order', time: '2 h' },
  { id: 'p5', name: 'Gauntlet', does: '10 games against each of the top 3 decks', exit: 'One-page matchup guide each: role, key turns, mulligan, counters to save', time: '6-8 h' },
  { id: 'p6', name: 'Stress', does: '5 games on a 25-minute clock, played tired', exit: 'No rules or mechanical tags across the 5 games', time: '2-3 h' },
]

export const WEEKS = [
  { name: 'Minimal', hours: '3-4 h', days: [['Mon', 'Review last week, one own-game VOD', '45 min'], ['Wed', '10 puzzles and number flash', '30 min'], ['Fri', '3 practice games with forecasts and blunder check aloud', '90 min'], ['Sun', 'Field update and one pro VOD, pause-predict-reveal', '45 min']], note: 'Keep the core habits alive. No new decks.' },
  { name: 'Committed', hours: '8-10 h', days: [['Mon', 'Own-game review: 3 losses, 5 close wins, tagged', '75 min'], ['Tue', 'Gauntlet: one matchup, 5 or 6 games', '2 h'], ['Wed', 'Puzzles, hand-guess game, number flash', '60 min'], ['Thu', 'Review with a partner', '60 min'], ['Fri', 'Pro VOD and matchup guide update', '75 min'], ['Sat', 'Event or online event with full routines', '2.5-3 h'], ['Sun', 'Rest, or 30-minute scorecard', '30 min']], note: 'Study to play ratio around 0.6.' },
  { name: 'Intensive', hours: '15-20 h', days: [['Mon', 'Own-game review, tagging, field model', '2 h'], ['Tue', 'Gauntlet: 2 matchups, hypothesis-driven', '3 h'], ['Wed', 'Puzzles, two-handed mirror pressure, deck math', '2.5 h'], ['Thu', 'Partner review, monthly coaching', '2 h'], ['Fri', 'Six-round timed simulation', '4 h'], ['Sat', 'Event or high-level online event, journal', '4-6 h'], ['Sun', 'Recovery and scorecard, no play', '45 min']], note: 'Two or three weeks max before a major. Take one full rest day.' },
]
