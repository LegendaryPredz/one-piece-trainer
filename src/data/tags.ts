// Mistake taxonomy from research/concepts.md 1.3. `cause` maps a tag to a consistency root cause (7.x).
export type Cause = 'Fatigue' | 'Autopilot' | 'Tilt' | 'Overconfidence' | 'Deck drift' | 'Prep gaps'

export const TAGS: { id: string; label: string; hint: string; cause?: Cause; variance?: boolean }[] = [
  { id: 'MP-Mechanical', label: 'Mechanical', hint: 'Knew the play, executed another', cause: 'Autopilot' },
  { id: 'MP-Sequencing', label: 'Sequencing', hint: 'Right cards, wrong order' },
  { id: 'MP-Line', label: 'Line', hint: 'Worse multi-turn plan' },
  { id: 'MR-Hand', label: 'Hand read', hint: "Misread their hand or range" },
  { id: 'MR-Role', label: 'Role', hint: 'Wrong beatdown or control call' },
  { id: 'MR-Rules', label: 'Rules', hint: 'Rules or card text' },
  { id: 'DB-Build', label: 'Build', hint: 'List problem surfaced in play' },
  { id: 'DB-Choice', label: 'Deck choice', hint: 'Wrong deck for this field', cause: 'Deck drift' },
  { id: 'PREP', label: 'Prep gap', hint: 'Did not know the matchup or card', cause: 'Prep gaps' },
  { id: 'STATE-fatigue', label: 'Fatigue', hint: 'Tired error', cause: 'Fatigue' },
  { id: 'STATE-clock', label: 'Clock', hint: 'Rushed by time', cause: 'Fatigue' },
  { id: 'STATE-tilt', label: 'Tilt', hint: 'Emotional error', cause: 'Tilt' },
  { id: 'STATE-autopilot', label: 'Autopilot', hint: 'Played without a purpose', cause: 'Autopilot' },
  { id: 'VAR', label: 'Variance', hint: 'Right play, bad outcome', variance: true },
]

export const CAUSES: Cause[] = ['Fatigue', 'Autopilot', 'Tilt', 'Overconfidence', 'Deck drift', 'Prep gaps']

export const FIXES: Record<Cause, { fix: string; where: string; href: string }> = {
  Autopilot: { fix: 'Say life, counters, triggers, DON, board before every pass. Aloud for two weeks, then silent.', where: 'Pre-pass check', href: '#routines' },
  Fatigue: { fix: 'Protect sleep the week of an event and run a timed six-round simulation monthly. Aim for late-round mistakes at 1.2x early rounds or less.', where: 'Weekly plans', href: '#routines' },
  Tilt: { fix: 'Run the four-step reset between rounds. After a loss with tilt signs, add a two-minute walk.', where: 'Between rounds', href: '#routines' },
  Overconfidence: { fix: 'After a win over a weaker opponent, re-read the pre-pass check before the next round. Tag easy rounds so the log can prove it.', where: 'Pre-pass check', href: '#routines' },
  'Deck drift': { fix: 'Lock the deck seven days out. A deck is main only after 200 registered games.', where: 'Prep timeline', href: '#routines' },
  'Prep gaps': { fix: 'Cover every deck at 5% or more of the field with a one-page matchup guide before locking.', where: 'Deck lab', href: '#deck' },
}
