// Private layer: closer to the paid guides' own wording (research/private/paid-guides-digest.md).
// Gitignored. The Playbook picks this up with import.meta.glob, so a build without this file just hides the sections.
export const PRIVATE = {
  frameworks: [
    { title: 'Two-pass review', body: ['Pass one: find the best play with the opponent\'s hand revealed. This tells you what was possible.', 'Pass two: rebuild the play using only public information, and grade yourself on this pass. The first pass is what to learn from, the second is what you are accountable for.'] },
    { title: '5-step freeze protocol (sim practice)', body: ['1. Freeze the game at a decision.', '2. State the objective.', '3. Commit to a full line.', '4. Predict their hand from public information.', '5. Reveal, branch line A against line B, then classify the lesson.'] },
    { title: 'Error taxonomy', body: ['Knowledge: you did not know the card, rule or matchup.', 'Recognition: you did not see the situation for what it was.', 'Calculation: you saw it and got the math wrong.', 'Planning: right math, wrong multi-turn plan.', 'Sequencing: right cards, wrong order.', 'Execution, clock or emotional: you knew and did something else.'] },
    { title: 'Lesson taxonomy', body: ['Public-information lessons become heuristics.', 'Range-based lessons stay as ranges.', 'Perfect-information lessons are not adopted as a default, because you would not have known.', 'Deck-list lessons change ratios.'] },
    { title: 'Turn routine at the start of each turn', body: ['Scan the board and their open resources.', 'Calculate both lethals: yours and theirs.', 'Objective: name it.', 'Plan two lines.', 'Execute, and re-evaluate after each step that reveals information.'] },
    { title: 'Before you defend', body: ['Preserve: what must still be alive next turn.', 'Attacks remaining: how many more are coming this turn.', 'Unknowns: what could still change.', 'Spend: what you are willing to pay.', 'End state: what the board looks like afterwards.'] },
    { title: 'Life absorption planning', body: ['Take early hits on purpose to save hand for the big late attacks.', 'Work backward from the turn you need to reach and plan a counter curve to it. A blanket rule of always taking the first two is a trap.'] },
    { title: 'Tech-card test', body: ['Name the exact problem the card solves.', 'It must show up in that problem\'s timing window.', 'It must have value outside one board state, and ideally carry counter.', '"It felt great once" does not count as evidence.'] },
    { title: 'Weekly allocation (about 5 hours)', body: ['45 min technical drills.', '120 min focused matchup set, alternating play and draw.', '60 min solo-versus-self lab.', '60 min paper or timed play.', '45 min review.', 'Split practice 80/20 between your main deck and a backup.'] },
    { title: '12-week plan', body: ['Weeks 1 to 4: mechanics.', 'Weeks 5 to 8: matchup sheets and memory exams.', 'Weeks 9 to 12: timed tournament simulation.'] },
    { title: '14-day ramp', body: ['Day 14 to 10: lock the deck and prepare the top five matchups.', 'Day 9 to 6: finalize flex slots.', 'Day 5 to 3: lock all 50 cards and run a timed five-round simulation.', 'Day 2 to 1: light recall only, protect sleep.', 'Event-day warm-up: five combat-math problems and three mulligan plans, not a stressful full match.'] },
  ],
  deckGuide: {
    intro: 'The strongest recent deck guides converge on this structure. Use it to read a guide, or to write your own one-pager for a deck.',
    sections: [
      ['Intro and credibility', 'Who wrote it and their results, why this deck now, how mature the list is, what the guide will and will not do.'],
      ['Position in the meta', 'The expected field, the decks to beat, who rose or fell and why, predator and prey, an honest tier call.'],
      ['Decklist and flex slots', 'A core list, then each flex slot with a "run it when" reason, the alternatives, and cards that were tested and cut.'],
      ['Game plan', 'Win conditions, the engine and how it chains, early, mid and late game with the questions to ask each turn, and the typical mistakes.'],
      ['Mulligan', 'The general principle, keep rules for first and second as heuristics, and keep or mulligan quizzes.'],
      ['Matchup bible', 'Per matchup: difficulty, preferred turn order, default plan and the signal to switch, key cards and what to play around, a mulligan line, early, mid and late turns with branches, target life total, and what must be answered on sight.'],
      ['Gameplay evidence', 'Recorded games per matchup, going first and second, updated as the format moves.'],
      ['Pre-event update', 'Latest lists from strong builders, mirror techs, and counter-decks that get good if the field goes lopsided.'],
      ['Cheat sheet', 'A one-page version to read before the event.'],
    ] as [string, string][],
    decisions: ['What to search for given the hand.', 'What to discard to the leader ability: the worst card in context.', 'When to rest and when to keep characters active.', 'How many big finishers it takes to close.', 'Which opposing body is the must-answer engine.', 'How much life you can sit at in this matchup.'],
  },
}
