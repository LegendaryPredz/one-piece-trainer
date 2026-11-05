// In-depth concept summaries. Own-words synthesis of public theory (research/concepts.md), the public
// landscape, and what strong players' paid guides converge on. No guide text, titles or author names.
export type Concept = {
  id: string
  group: 'Decisions' | 'The game' | 'Reading' | 'Preparation' | 'Consistency'
  title: string
  leverage?: boolean // highest return for a near-top player whose problem is consistency
  summary: string
  why: string
  ideas: string[]
  apply: string[]
  mistakes: string[]
  drill: string
  tool?: { label: string; href: string }
}

export const GROUPS: Concept['group'][] = ['Decisions', 'The game', 'Reading', 'Preparation', 'Consistency']

export const CONCEPTS: Concept[] = [
  {
    id: 'intent', group: 'Decisions', leverage: true, title: 'Every action has a purpose',
    summary: 'Before any play or attack, you can say what it is for. If you cannot, you are on autopilot.',
    why: 'Strong players disagree on a lot, but this shows up in almost every serious guide. "I can attack" is never a reason. Most errors from good players are not gaps in knowledge, they are plays made without asking what the play achieves. A stated purpose also makes your own review possible: you can check the play against the goal you had.',
    ideas: [
      'Goals fall into a short list: develop your board, develop your hand, protect a resource, take their life, take their board, take their hand, or gather information.',
      'A good action serves a goal whichever way the opponent responds. If it only works when they make one specific choice, it is a hope, not a plan.',
      'Asking "why?" once per action is enough. It is cheap and it catches the plays that felt natural.',
    ],
    apply: [
      'At each attack or main-phase play, name the goal in a few words, silently or aloud.',
      'If the goal is "information", say what you expect to learn and what you will do with it.',
      'When two plays share a goal, pick the one that is still good if they respond the other way.',
    ],
    mistakes: ['Attacking because a character is untapped.', 'Playing a card because it is castable, not because the board needs it.', 'Giving a reason only after the result is known.'],
    drill: 'For your next 10 games, say the goal for every attack. Count the attacks where you could not. That count is your autopilot rate.',
    tool: { label: 'Pre-pass check', href: '#routines' },
  },
  {
    id: 'role', group: 'Decisions', title: 'Role: racer or grinder, chosen every turn',
    summary: 'Decide whether you are racing or grinding in this matchup, this game and this turn. The deck does not decide it for you.',
    why: 'Decks have reputations, and reputations are wrong in specific games. Turn order, the opening hands, what each side searched and the board decide who is the aggressor. Misreading your role makes every later decision slightly wrong: you take life as the control deck, or you trade resources as the one who is losing the long game.',
    ideas: [
      'A common read: whoever has seen more searchers usually wins a long game. If you are behind on that, racing may be correct even in a deck that normally grinds.',
      'Switching role changes what your cards are worth. A defensive card in hand can become dead the moment you start racing, and the reverse.',
      'Re-check after every big swing: a trigger, a removal or a missed counter can flip who should be racing.',
    ],
    apply: [
      'At the start of turn, answer "who is the aggressor right now?" before choosing a line.',
      'Name the signal that would make you switch, such as their searcher count or your life total.',
      'When you switch, re-rank the cards in your hand under the new plan.',
    ],
    mistakes: ['Keeping the default plan after the signal to switch has appeared.', 'Taking early life as the deck that cannot afford to.', 'Deciding role from the matchup chart instead of the actual game.'],
    drill: 'In review, mark each game where your role changed. Check whether you changed it on time or two turns late.',
  },
  {
    id: 'clock', group: 'Decisions', leverage: true, title: 'The clock: turns to win, turns to lose',
    summary: 'From roughly 10 DON, count how many turns until you kill them and how many until they kill you.',
    why: 'Most close games are decided by a clock that one player stopped counting. Counting makes risk a calculation. Ahead on the clock, you play safe and respect their outs. Behind, you take the risk, and the guides are consistent that you start it earlier than feels comfortable.',
    ideas: [
      'Count both clocks every turn, not only when the game feels close.',
      'Assume the opponent finds a reasonable best line. Do not plan around them bricking.',
      'If you are behind, switching two turns early beats switching on the last turn, when it no longer works.',
      'Ahead is not winning. Ahead means the plan is to deny outs, not to go faster.',
    ],
    apply: [
      'Turn-start: my kill turn, their kill turn, who is ahead.',
      'If ahead: list their outs and spend resources to deny the likeliest one.',
      'If behind: write the risky line and the turn by which it must start.',
    ],
    mistakes: ['Racing while ahead because it feels faster.', 'Waiting for a safe window that never comes.', 'Counting only your clock.'],
    drill: 'In the match log, add one note per game on the turn you last counted both clocks. Review the games where that turn was late.',
  },
  {
    id: 'life', group: 'The game', title: 'Life is a resource, not just a clock',
    summary: 'Every hit on a leader hands the opponent a card and sometimes a free trigger. Taking or dealing a hit is a two-sided trade.',
    why: 'Most card games treat the opponent life total as a countdown. Here each point is also a card. That changes the question from "can I hit face?" to "what does this hit give them?". It is why early life can be cheap to take: a hand of counters protecting your life is worth less than the same cards kept for the turns that matter.',
    ideas: [
      'Taking early hits to keep your hand full is often correct, because characters on the board attack many times and cards in hand can become counters later.',
      'There is no blanket rule such as always take the first two. Work backward from the turn you need to reach and plan a counter curve to it.',
      'Authors differ on how low is safe in the mirror: some stabilize around three life, some sit at two on purpose. The right number depends on their trigger count and burst.',
    ],
    apply: [
      'Before taking a hit, name what it costs and what the card it gives them could be.',
      'Choose a target life total for this matchup and write it on your cheat sheet.',
      'When you hit them, count the cards you just gave them against your next attack.',
    ],
    mistakes: ['Spending counters early to protect life you could afford to lose.', 'Ignoring the card the hit gives them.', 'Holding a fixed life rule against a deck that bursts.'],
    drill: 'For three games, write your target life total at turn 3. Compare it to where you ended up.',
  },
  {
    id: 'counters', group: 'The game', leverage: true, title: 'Counter economics and attack sizing',
    summary: 'Size every attack by what it costs them to stop it. Small differences in power change how many cards they must spend.',
    why: 'The counter needed to stop an attack is the attacker power minus the defender power plus one thousand, because the attacker wins ties. Character counters are 1K or 2K, so the number of cards that takes grows in steps. A 7K attack into a 5K leader needs 3K, which costs at least two cards. A 6K attack needs 2K, which costs one. That step is why 7K is the standard efficient attack outside lethal turns.',
    ideas: [
      'Thresholds depend on the current power of the target, including DON and effects, so recompute before applying a rule of thumb.',
      'Events can counter for more than 2K, so check what they might hold.',
      'A forced two-card spend strips their hand, which sets up the next attack, even when no life is lost.',
    ],
    apply: [
      'For each attacker, compute the counter needed and the minimum cards it takes.',
      'Prefer attacks that cross a card-count threshold.',
      'Spend DON to cross a threshold, not to add power that does not change the card count.',
    ],
    mistakes: ['Giving one more power than needed on a non-lethal attack.', 'Using a rule of thumb against a target whose power changed.', 'Ignoring event counters.'],
    drill: 'Run the number flash counter questions daily until the answers are instant.',
    tool: { label: 'Number flash', href: '#train' },
  },
  {
    id: 'don', group: 'The game', title: 'DON allocation: where each one goes',
    summary: 'A single DON can flip a turn. How you split or stack them is one of the biggest differences between mid-level and top players.',
    why: 'One strong guide credits most of the skill gap to DON and sequencing. Two 6K attacks into a hand with two known 2K counters fail, while 7K and 5K can succeed. The same DON total, split differently, changes the result. Allocation is also information: where you put DON tells the opponent what you can do.',
    ideas: [
      'Stacking makes one attack hard to stop. Splitting makes several attacks each demand a response. Which is better depends on their hand size and counter sizes.',
      'Attacks that need no DON can go first, before you commit DON.',
      'Leave DON where it keeps a threat alive for the next turn, not only the current one.',
    ],
    apply: [
      'List your attackers and the DON you have, then write the two best splits.',
      'Check each split against the counters they have shown.',
      'Pick the split that still works if they have one more counter than you expect.',
    ],
    mistakes: ['Defaulting to stacking on the biggest body.', 'Spending DON before the attacks that do not need it.', 'Forgetting that DON is a signal.'],
    drill: 'Build one puzzle per week where only the DON split changes the outcome.',
    tool: { label: 'Puzzles', href: '#train' },
  },
  {
    id: 'lethal', group: 'The game', title: 'Lethal turns: order and sequencing',
    summary: 'On a lethal turn, the order of attacks and the order of effects matters more than the raw numbers.',
    why: 'If you can win this turn, the only thing that stops you is an order that gives the opponent an answer. Careful players do the same checks every time: the guides give the same short list.',
    ideas: [
      'Attack with smaller attacks first, because each life you take puts a card in their hand that may be a counter, and save the largest for last. Treat this as a heuristic and check it on the board.',
      'Send first the attackers most exposed to known triggers or removal.',
      'Make attacks that need no DON before committing DON.',
      'Attack before you develop, so a trigger cannot wreck a body you just played.',
      'Draw before you search, so you know what you are searching for.',
    ],
    apply: [
      'Write the full attack order before the first attack.',
      'For each attack, name what stops it and what you do if it is stopped.',
      'Keep a fallback: if the first attack fails, which later attack still matters?',
    ],
    mistakes: ['Playing out the turn before checking whether you have lethal.', 'Committing DON before a free attack.', 'No plan for the first failed attack.'],
    drill: 'At the start of each attack phase, say "lethal?" and "their lethal?". Track how often the answer is yes and you missed it.',
    tool: { label: 'Pre-pass check', href: '#routines' },
  },
  {
    id: 'board', group: 'The game', title: 'Board or face, and the standing board',
    summary: 'Attack the board when removing a body is what makes your plan work. Otherwise go face. Build a board and attack as a group.',
    why: 'Sending single characters in early and alone is described as the most common mistake across decks. It feeds the opponent resources and leaves nothing behind when the attack is countered. A standing board gives you several threats at once, so losing one body does not end the wave.',
    ideas: [
      'Worth removing: the attacker that would kill you, the blocker that stops your finish, or an engine piece.',
      'Attacking a rested character leaves the opponent a different choice than attacking life, because they cannot save it by taking the hit.',
      'Replacement engines let a body die for value, but that does not defend against opponents who ignore the board and race.',
    ],
    apply: [
      'Before attacking the board, name which piece you are removing and why the plan needs it gone.',
      'Develop first and attack as a group once the board is wide enough to survive a response.',
    ],
    mistakes: ['Turning characters sideways for no reason.', 'Removing a body that does not matter.', 'Letting an engine keep running because face felt faster.'],
    drill: 'In review, mark attacks where a lone character went in. Count how many came back.',
  },
  {
    id: 'reading', group: 'Reading', leverage: true, title: 'Reading their hand from public information',
    summary: 'Counters, discards, cards not played and DON usage all tell you what they hold. Track them.',
    why: 'The counter decision is the richest read in the game, because it shows both resources and priorities. The minimum counter that exactly blocks shows precision. Over-countering means a surplus or a bluff. Players usually pitch their lowest-priority card first, so a strong card used as a counter suggests weaker counters are gone.',
    ideas: [
      'A player who has been countering and suddenly stops is usually out of counters. Push next turn.',
      'Cards searched stay known until they leave the hand. Remember them.',
      'Cards they did not play on curve are information too.',
      'Hand size, DON attachment and when they pass all narrow the range.',
      'Keep track of what is on the bottom of the deck, in order, as small groups, when deck count matters.',
    ],
    apply: [
      'After each counter decision, write a one-line update on their hand.',
      'Before each attack, state the likeliest hand and one alternative.',
      'Compare your read to what they show at the end of the game.',
    ],
    mistakes: ['Treating every card as unknown.', 'Forgetting a searched card.', 'Not updating after a bluff.'],
    drill: 'Predict the number of counters in their hand before each of your big turns, and log the error afterwards.',
  },
  {
    id: 'triggers', group: 'Reading', title: 'Triggers and the field you are in',
    summary: 'Trigger density is set by the meta. A card that is great in an aggressive field is weaker in a field of board combat.',
    why: 'Triggers matter most when life is revealed often. In a fast field, a free blocker or removal on a hit can win a game. In a slower field they trade for nothing. Your deck, and what you assume about theirs, should follow the field.',
    ideas: [
      'Use real odds, not feelings. The number flash drill covers the chance that at least one of your life cards is a trigger, and the chance a wide attack hits none.',
      'A "pseudo-lethal" turn that forces them to spend almost everything just to survive sets up the next wave even if it does not win.',
      'Attack into a life total with a known trigger profile only when the exposure is acceptable.',
    ],
    apply: [
      'Count the triggers in your own list and in the lists you expect to face.',
      'Before a wide attack, estimate the chance of at least one trigger among the cards you will hit.',
    ],
    mistakes: ['Swinging wide into a high trigger count without a fallback.', 'Overvaluing triggers in a slow field.'],
    drill: 'Do the number flash life questions until your estimates are within three points.',
    tool: { label: 'Number flash', href: '#train' },
  },
  {
    id: 'mulligan', group: 'Preparation', title: 'Mulligan and opening hand',
    summary: 'A good opener plays turns one to three and has a natural counter. It is not defined by its strongest card.',
    why: 'Mulligan advice in strong guides is always a heuristic, never a rule, and it varies by matchup and turn order. A hand overloaded with late cards is a bad keep when a leader ability makes you discard.',
    ideas: [
      'Judge a hand by whether it curves, not by its best card.',
      'Dig for the engine piece your deck needs to start, and keep one natural counter.',
      'Searcher count in the opening hand matters in long matchups.',
      'Write a mulligan line per matchup on your cheat sheet.',
    ],
    apply: [
      'For each top matchup, write a one-line keep rule for first and for second.',
      'Review each mulligan decision in your log, not just the losses.',
    ],
    mistakes: ['Keeping a hand because of one strong card.', 'The same keep rule against every deck.', 'Not reviewing keeps.'],
    drill: 'Tag the keep decision in your decision journal and review the keeps that lost.',
    tool: { label: 'Log', href: '#log' },
  },
  {
    id: 'process', group: 'Consistency', leverage: true, title: 'Process over outcome: review the decision, not the result',
    summary: 'Judge a decision by what you knew then. Review in a fixed order: the opening, then technical play, then variance.',
    why: 'Results are a noisy, lagging measure. Skill grows in plateaus and a near-perfect player can still go 5-5 at a regional. Strong players blame luck only after checking everything else, and the guides disagree about when it is safe to do so at all. Some allow it at big events to move on to the next round, but never in testing, where it ends learning.',
    ideas: [
      'Review order: was the keep right, then did you pick the right role, check for missed lethal, missed board control, defensive errors, and windows you gave away. Only then consider variance or a card change.',
      'Two passes help: find the best play with everything revealed, then rebuild the play from public information only and grade that one.',
      'Sort each lesson: from public information (turn it into a heuristic), from a range (keep it as a range), from perfect information (do not adopt it as a default), or from the list (change the ratios).',
      'Tag each error: knowledge, recognition, calculation, planning, sequencing, or execution under clock or emotion.',
    ],
    apply: [
      'Log each game right after, before talking about it.',
      'Review a day later in the order above.',
      'Tag the repeats. One-off mistakes are noise. Repeats are your list.',
    ],
    mistakes: ['Blaming variance before checking the opening.', 'Adopting a perfect-information play as a default.', 'Changing the list before the play.'],
    drill: 'After 30 tagged games, look at which cause dominates before choosing what to fix.',
    tool: { label: 'Leaks', href: '#leaks' },
  },
  {
    id: 'testing', group: 'Preparation', title: 'Testing that teaches something',
    summary: 'Treat testing as an experiment. Bring a small number of questions, play your worst matchups, and use partners who disagree honestly.',
    why: 'Volume without a question is a way to feel productive. The strongest groups behave like laboratories: they repeat the same matchup and the same opening hands until nothing new appears. A small sample can mislead, so questions are about lines and decisions, not about win rates.',
    ideas: [
      'Bring at most three questions to any session or guide. Beginners, one or two.',
      'Practice your worst matchups, not your best.',
      'Say your reasoning aloud. If you cannot explain a line, you do not know it yet.',
      'A tech card passes only if you can name the problem it solves, it shows up in that problem\'s window, it has value outside one board, and ideally it carries a counter. "It felt great once" is not evidence.',
      'Choose partners for honest disagreement and changing their minds in front of you, not for rating.',
    ],
    apply: [
      'Write the questions before the session.',
      'Alternate play and draw in a matchup set.',
      'End with what you will change and what you will test next.',
    ],
    mistakes: ['Testing the matchups you already win.', 'Reading win rates off 10 games.', 'Adding a card without a named problem.'],
    drill: 'Run the new-deck pipeline gauntlet for a deck with questions written first.',
    tool: { label: 'Deck lab', href: '#deck' },
  },
  {
    id: 'deck', group: 'Preparation', title: 'Choosing a deck: position, comfort, field',
    summary: 'Model the field as a distribution of opponents and pick a deck you know that beats most of it.',
    why: 'A deck you know well usually beats a better deck you picked up cold. Strong players mostly stay on a comfort pick unless the field has clearly moved against it. Metas cycle, and the people who were right last format adapt worst. Your own log often shows a shift before the community does.',
    ideas: [
      'Weigh a deck\'s share of the field above its share of the top 8.',
      'Aim to be strongly favored against most of the expected field and accept a few bad matchups.',
      'The dominant deck becomes a target once the field has adapted to it.',
      'Hold your beliefs as hypotheses and update them from your results.',
    ],
    apply: [
      'Pull the field from the Deck lab and list the decks above 5%.',
      'For each, write your expected matchup and how sure you are.',
      'Lock the deck a week out and only change flex slots for a written reason.',
    ],
    mistakes: ['Picking from top-8 share only.', 'Switching decks the week of the event.', 'Treating the matchup chart as fixed.'],
    drill: 'Update your field model weekly and check last month\'s predictions against what happened.',
    tool: { label: 'Deck lab', href: '#deck' },
  },
  {
    id: 'newset', group: 'Preparation', title: 'A new set: how to approach OP18',
    summary: 'Expect a first-look phase. Learn the new engines early, test them against the top decks, and avoid locking too soon.',
    why: 'In the first weeks of a set, guides are labelled "first look" and lists change a lot. The simulator usually gets new cards before release. The advantage goes to the player who understands what the new leaders can do while the field is still guessing.',
    ideas: [
      'Read what the new leaders do before reading anyone\'s list. Know the engine and what it needs.',
      'Test new decks against the top three existing decks, not against each other.',
      'Expect lists to move weekly. Do not copy one early list.',
      'Keep a safe comfort deck ready until the field settles.',
    ],
    apply: [
      'Run the new-deck pipeline on the two or three leaders you expect to matter.',
      'Re-check the field data after the first online events.',
    ],
    mistakes: ['Committing to a first list.', 'Ignoring the new set until a regional.', 'Dropping your comfort deck too early.'],
    drill: 'Set a date to compare your pre-release read with the first week of results.',
    tool: { label: 'Deck lab', href: '#deck' },
  },
  {
    id: 'routine', group: 'Consistency', leverage: true, title: 'Tournament routines and the consistency engine',
    summary: 'Inconsistency in strong players comes from a short list of causes. Small routines decided in advance handle most of them.',
    why: 'Fatigue, autopilot, tilt, overconfidence against weaker opponents, deck drift and preparation gaps explain most of the gap between a player\'s best and worst events. They are not talent problems. Each has a signature in your own data and a cheap intervention.',
    ideas: [
      'Treat tilt as a skill, with responses chosen in advance. A short reset between rounds works: log, let go, fuel, focus.',
      'A fixed turn routine removes "forgot to consider" errors: scan the board, count both lethals, state the objective, plan two lines, then execute and re-check. Before defending, check what you preserve, what attacks remain, what is unknown, what you spend and what the end state is.',
      'A lock around two weeks out, then light recall and sleep at the end, beats late changes.',
      'Warm up with a few combat-math problems and mulligan plans, not a stressful match.',
      'Say targets and DON out loud, and call a judge when unsure.',
    ],
    apply: [
      'Use the between-round reset after every game, not only after losses.',
      'After each event, fill the consistency scorecard and note which cause moved.',
      'Fix the largest cause first, not the most recent mistake.',
    ],
    mistakes: ['Skipping the reset after a win.', 'Fixing the last mistake instead of the biggest cause.', 'Changing decks late.'],
    drill: 'Keep the late-round mistake ratio at or below 1.2 times the early-round rate.',
    tool: { label: 'Routines', href: '#routines' },
  },
]

export const DEBATES: { q: string; views: string[] }[] = [
  { q: 'Is it fine to blame bad luck?', views: ['Only at big events, to protect your state, never in testing.', 'Almost never. Check everything first, because variance blaming is the costliest bias.', 'In between: opening first, then technical play, then variance.'] },
  { q: 'How much early damage should you take?', views: ['Take the first one or two hits to keep cards.', 'Protect your attackers over your life when setting up lethal.', 'No blanket rule. Plan a counter curve back from the turn you need.'] },
  { q: 'Fixed blueprints or objectives?', views: ['Some give a perfect curve per matchup.', 'Others teach objectives and refuse a fixed curve.', 'Mulligan heuristics should be marked as non-absolute.'] },
  { q: 'How many techs?', views: ['A near-pure list with few techs.', 'Event-heavy techs for a mirror-heavy event.', 'A tech must justify itself across situations.'] },
  { q: 'Go first or second?', views: ['Most guides prefer second for engine decks.', 'Some want first against one deck to force a tight curve.', 'Choose by who gains the more important tempo, not by habit.'] },
  { q: 'What separates top players?', views: ['DON and sequencing.', 'Intent.', 'Discipline and coaching.', 'The feedback loop.', 'Lethal awareness and reading.'] },
]
