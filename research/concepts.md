# OPTCG Training Concepts: A Skill Tree for Consistency

**Audience:** a near-top One Piece Card Game player with multiple Top 64s, several Top 32s, one Top 8, and many wins at mid-size events, whose main problem is **inconsistency**.
**Purpose:** the concept backbone of a personal training site. Each node gives what the concept is, why it works, an OPTCG drill or routine, and a level tag.
**Compiled:** 2026-11-05.

---

## 0. How to read this document

- **Level tags.** **[Intermediate]** is a foundation habit a top-64 player probably half-does already. **[Advanced]** separates top-32 from top-8 players. **[Pro]** is marginal-gain work that pays off only once the lower tiers run on autopilot.
- **Evidence labels.** Sources are cited inline. Where I transfer an idea from another game to OPTCG, or the point is my own synthesis, it is labeled *(adaptation)* or *(synthesis)*. Treat those as reasoned hypotheses, not findings.
- **Measurement rule.** Every drill names a metric. A drill without a metric becomes "playing more", which is exactly the kind of practice the research says does not raise a ceiling (see 1.1).

### OPTCG facts these drills rely on
Check them against the current Comprehensive Rules before publishing ([Bandai CR PDF](https://en.onepiece-cardgame.com/pdf/rule_comprehensive.pdf)).
- 50-card main deck, maximum 4 copies of a card, and a separate 10-card DON!! deck.
- Opening hand of 5 and one full-hand mulligan. Life is set after the mulligan, from the top of the deck, equal to the Leader's life value ([onepiece.gg rules](https://onepiece.gg/rules/comprehensive-rules/), [opdeckguide](https://opdeckguide.pages.dev/beginner-guides/complete-rules/)).
- Damage to Life: you may reveal a Trigger and activate it instead of adding the card to hand ([onepiece.gg glossary](https://onepiece.gg/rules/glossary/)).
- **Event formats vary.** Official events have used Bo1 Swiss with 30-minute rounds, a Bo1 top cut (2024 Worlds prelims), and Bo3 at the 2025-26 World Finals. Check each event page ([2024 championship rules](https://en.onepiece-cardgame.com/pdf/championship2024_rules.pdf), [CS2025 World Final rules](https://en.onepiece-cardgame.com/pdf/rule_cs2025_worldfinal.pdf), [26-27 Regionals S1](https://en.onepiece-cardgame.com/events/regional-season1-26-27.html)). **Bo1 Swiss raises the share of results that comes from variance.** This matters for 7.x and 10.x.

---

## SKILL TREE OVERVIEW

```
1. PRACTICE ENGINE (how you train)
   1.1 Deliberate practice principles
   1.2 Solo vs. self: goldfishing, two-handed play, scenario puzzles
   1.3 Decision journal and mistake taxonomy
   1.4 Active VOD review and decision-point tagging
   1.5 Coaching and peer review
2. IN-GAME TECHNIQUE (what you do on each turn)
   2.1 Turn procedure and pre-pass blunder check
   2.2 Planning lines (multi-turn) and who's the beatdown
   2.3 Playing to your outs
   2.4 Hand reading and range building
   2.5 Outcome prediction and calibration
3. QUANTITATIVE FOUNDATIONS
   3.1 Hypergeometric thinking for OPTCG (counters, triggers, life, DON, searchers)
   3.2 Resource math: DON curves, life as a resource, counter economy
4. PREPARATION (between events)
   4.1 Meta analysis and deck selection
   4.2 Matchup testing methodology and sample-size traps
   4.3 New-deck learning pipeline
   4.4 Tournament prep timeline (T-21 days to T-0)
5. PERFORMANCE STATE (the operator)
   5.1 Mental game: A/B/C-game inchworm, tilt profiles
   5.2 Focus and attention control
   5.3 Variance management and results-oriented thinking
   5.4 Sleep, nutrition, physical prep
6. TOURNAMENT EXECUTION (on the day)
   6.1 Pre-event and between-round reset routine
   6.2 Clock, time, and fatigue management
7. CONSISTENCY DIAGNOSTICS (the special section)
   7.0 Why strong players are inconsistent
   7.1-7.6 Root causes and interventions
8. TRAINING TEMPLATES (weekly plans by time budget)
9. METRICS DASHBOARD (what the site should track)
10. SOURCES
```

---

## 1. PRACTICE ENGINE

### 1.1 Deliberate practice principles [Intermediate]
**What.** Deliberate practice is effortful work designed to fix a specific weakness, with immediate feedback and repetition. It is different from "playing" (performance) and from "fun play".
**Why.**
- Ericsson, Krampe & Tesch-Römer (1993, *Psychological Review*), "The Role of Deliberate Practice in the Acquisition of Expert Performance," found that accumulated deliberate practice, not total activity, separated expert from good performers.
- In chess, Charness et al. (2005, *Applied Cognitive Psychology* 19:151–165) found that **serious study alone** was the strongest predictor of rating, stronger than tournament play or coaching. Grandmasters had logged roughly 5,000 hours of solo study in their first decade, about 5x intermediates ([abstract](https://zendy.io/title/10.1002/acp.1106)).
- **Caveat.** Macnamara, Hambrick & Oswald (2014, *Psychological Science*) estimate deliberate practice explains about 26% of performance variance in games ([Princeton summary](https://www.princeton.edu/news/2014/07/03/becoming-expert-takes-more-practice)). It matters, but it is not everything, and Ericsson disputed the definitions they used. Burgoyne et al. (2019) re-analysed the chess data and found that study plus instruction explained a large share of peak rating ([PDF](https://englelab.gatech.edu/articles/2019/Burgoyne_et_al_2019_AJP.pdf)).
- **Takeaway for a near-top player.** Ladder or locals volume is "tournament play" in Charness's terms. It helps, but your marginal hour is worth more spent in structured solo study: review, puzzles, and math.

**OPTCG routine.** The 3:1 rule *(synthesis)*: for every 3 hours of play, spend at least 1 hour on review or study with a written objective.
**Measure.** Weekly ratio of study hours to play hours, logged on the site. Target ≥ 0.33.

### 1.2 Solo vs. self: goldfishing, two-handed play, scenario puzzles

#### 1.2a Goldfishing [Intermediate]
**What.** You play your deck against no opponent to learn its natural curve, its DON usage, and how often it "does its thing" by turn N.
**Why.** It isolates sequencing and draw variance from interaction. MTG players have long used it to find the "goldfish kill turn." It is cheap and gives fast feedback *(adaptation)*.

**Drill: "Curve Audit".**
- Play 20 goldfish games, 10 on the play and 10 on the draw.
- Each game, log: turn the key 5-cost (or deck-defining) play lands; DON left unspent per turn; and whether the hand was a keep or a mulligan.
- **Time.** 45–60 min. **Frequency.** Once per new list, and again after any change of 3 or more cards.
- **Measure.** Median "on-curve turn." Unspent-DON total per game, which should trend toward the theoretical floor. Mulligan rate, compared with the hypergeometric expectation in 3.1.

#### 1.2b Two-handed play (solo vs. self) [Intermediate → Advanced]
**What.** You play both sides, each played to win, often a known tier-1 matchup.
**Why.** You see both hands. That exposes how much information you are not using when you play with one hand hidden, and it trains the opponent's perspective, which hand reading (2.4) needs.
**Pitfall.** You know both hands, so bluffs and counter-baiting mean nothing. Do not use it for win-rate data (4.2).

**Drill: "Mirror Pressure".**
- Play the opponent deck on "A-game autopilot" using a strict heuristic sheet, for example: always attack Leader with the biggest attacker, and counter only when lethal is threatened.
- Play your own side fully.
- After each game, write 1 line: *"Where did the opponent's hidden hand change what I should have done?"*
- **Time.** 30 min per game, 2 games per session. **Frequency.** 1x per week during prep.
- **Measure.** Number of "hidden info would have changed my play" moments per game. You want to start spotting these live (see 2.4).

#### 1.2c Scenario puzzles ("lethal/survival puzzles") [Advanced]
**What.** You set up a board from a real game (your own VOD), freeze it, and solve for the best line under a time limit. This is the OPTCG version of chess tactics puzzles *(adaptation of chess puzzle training; Charness 2005 "serious study")*.

**Drill: "Freeze-Frame".**
- From each reviewed game, extract 1 critical turn into a puzzle card. Record board, both hands (or a range), life totals, DON, and trash.
- Solve in 3 min. Then check against an extended (10 min) solve or against a peer.
- **Frequency.** 10 puzzles per week. **Measure.** % of puzzles where your 3-min answer matches your 10-min or peer answer. Average time to answer.
- **Site feature.** A puzzle bank with spaced repetition. Re-serve missed puzzles after 1, 3, and 7 days.

### 1.3 Decision journal and mistake taxonomy [Intermediate]
**What.** A per-game log of decisions and errors, tagged with a fixed taxonomy so that patterns surface.
**Why.**
- Annie Duke (*Thinking in Bets*, 2018) argues that decision quality has to be judged apart from outcome. Judging by outcome is "resulting" ([summary](https://www.sachinrekhi.com/thinking-in-bets-annie-duke)).
- Tendler's approach is to *write tilt and mistakes down* to find their patterns ([PokerNews interview](https://www.pokernews.com/strategy/strategy-with-kristy-jared-tendler-the-mental-game-of-poker-11630.htm)).
- A fixed taxonomy turns fuzzy regret into countable data.

**Mistake taxonomy (use exactly these tags):**

| Tag | Definition | OPTCG example |
|---|---|---|
| **MP-Mechanical** | You knew the right play and executed the wrong one | Forgot an On-Play effect, mis-attached DON, forgot a Rush timing |
| **MP-Sequencing** | Right cards, wrong order | Attacked with the searcher's target before using the searcher |
| **MP-Line** | Chose a worse multi-turn plan | Raced when you should have stabilized |
| **MR-Hand** | Misread the opponent's hand or range | Swung into an obvious 2k counter hand |
| **MR-Role** | Misjudged beatdown vs. control | Took life early as the control deck |
| **MR-Rules** | Rules or card-text misunderstanding | Trigger timing, Blocker restrictions |
| **VAR** | Correct decision, bad outcome | Opponent hit a trigger at a 31% spot |
| **DB-Build** | Deckbuilding error surfaced in play | Too few counters, so you could not defend a must-defend turn |
| **DB-Choice** | Deck-selection error for this field | Brought a deck with a bad tier-1 matchup spread |
| **PREP** | Did not know the matchup or card | First time facing a tech card in a common deck |
| **STATE** | Error caused by fatigue, tilt, or rushing (add sub-tag) | `STATE-fatigue`, `STATE-tilt`, `STATE-clock`, `STATE-autopilot` |

**Routine.**
- After every tournament game, spend 2 min in a notes app or on the site's form.
- Record: result; play or draw; matchup; turn of the critical decision; your tags; and a confidence rating from 1–5 that it was a mistake.
- **Measure.** Mistakes per game, split by tag, as a rolling 30-game window. **The goal is not zero mistakes. The goal is a falling MP and MR rate and a stable VAR share.**

### 1.4 Active VOD review and decision-point tagging [Advanced]
**What.** You review your own recorded games (sim client, webcam, or stream) and others' top-cut VODs, stopping at decision points and predicting before watching.
**Why.**
- Passive watching gives weak feedback.
- "Predict then reveal" forces retrieval and generates an error signal. This is the same structure that makes chess players' "guess the move" study with annotated master games effective *(adaptation)*.
- It also feeds calibration (2.5).

**Decision-point tagging taxonomy (OPTCG-specific):**

| Code | Decision point |
|---|---|
| `KEEP` | Mulligan or keep |
| `DON-ALLOC` | How to spend or attach DON this turn |
| `DEPLOY` | Which characters to play, and whether to overextend into a board wipe |
| `ATK-ORDER` | Attack order and targets (Leader vs. character) |
| `CTR-USE` | Whether and how much to counter, and with which cards |
| `LIFE-TAKE` | Choosing to take damage (life as a resource) |
| `TRIG` | Whether to activate a trigger or keep it in hand |
| `BLOCK` | Blocker usage |
| `HOLD` | Holding cards or DON back (bluff or real) |
| `LETHAL` | Lethal check or setup turn |
| `ROLE` | Beatdown/control pivot |
| `CLOCK` | Time-driven decision |

**Drill: "Pause-Predict-Reveal".**
- Watch a top-cut VOD. Pause at every `ATK-ORDER`, `CTR-USE`, and `LETHAL` point.
- Write your play and a confidence %, then reveal.
- Count disagreements. For each one, decide who was right, using the outcome **only** as weak evidence.
- **Time.** 45 min for 1 match. **Frequency.** 2x per week.
- **Measure.** Agreement rate with top players. Calibration of your confidence % (2.5). Review your own games at the same rate as pro games.

**Self-review routine ("3-5-1").**
- Review **3** of your losses and **5** of your close wins per week. Close wins hide the most mistakes, because winning masks them.
- For each, log **1** "decision I'd change" with its tag.

### 1.5 Coaching and peer review [Advanced]
**What.** Structured external review of your decisions by players at or above your level.
**Why.**
- Decision groups are one of Duke's core recommendations: other people catch the resulting and self-serving bias you cannot see in your own reviews ([Talks at Google summary](https://rosetta.to/u/talksatgoogle/thinking-in-bets-annie-duke-talks-at-google)).
- Burgoyne et al. (2019) did **not** find that instruction multiplied the value of solo study. Coaching complements study; it does not replace it.

**Routine: "Pod of 3–4".**
- 1x per week, 60 min. Each member brings 2 frozen decision points (from 1.2c) and 1 decision they are unsure about.
- Rules: present the position *before* revealing the outcome. Each person states a play and a confidence before discussion. Disagreements get a "most likely right" verdict and a tag.
- **Measure.** Count of "I was overruled and agreed" per month. A count near zero suggests either an echo chamber or a pod that is too weak.
- **Pro add-on.** Pay for or trade 1 session per month with a player who has more top-8s than you, focused only on the matchups where your tagged MR rate is highest.

---

## 2. IN-GAME TECHNIQUE

### 2.1 Turn procedure and pre-pass blunder check [Intermediate, the highest-ROI habit]
**What.** A fixed mental checklist you run at defined moments every turn, so that errors from "forgot to consider X" disappear.
**Why.** In chess, Dan Heisman's blunder check is to consider the opponent's checks, captures, and threats before committing. Skipping it ("Hope Chess") is the main source of class-player blunders ([Heisman, Chess.com](https://www.chess.com/blog/danheisman/checking-for-safety-requires-more-than-using-tactical-vision)). The mechanism is the same in card games: most strong-player errors are omissions under time and fatigue, not gaps in knowledge. Implementation intentions ("If X, then I do Y") have a medium-to-large effect on goal attainment (Gollwitzer & Sheeran 2006, d≈0.65 over 94 tests; the 2024 update spans d≈0.27–0.66, strongest when the plan is if-then and rehearsed) ([Frontiers review](https://www.frontiersin.org/articles/10.3389/fnhum.2015.00395/full)).

**OPTCG blunder check (*adaptation*).** Train the trigger "*before I say 'pass' or 'go'*" to fire this checklist:

> **L-C-T-D-B — "Life, Counters, Triggers, DON, Board"**
> 1. **Life:** What is their max damage next turn (attackers + Rush + DON available + likely searches)? Am I dead to it? If yes, what is the minimum I need to hold?
> 2. **Counters:** How many counters am I holding, and which ones must I *not* spend this turn to survive next turn?
> 3. **Triggers:** Did I attack into life with a known trigger profile? Did my attacks leave me exposed to a trigger blowout (a removal trigger, a Rush character from a trigger)?
> 4. **DON:** Is any DON unspent or unattached that had a use? (Rested DON, active DON, DON returned for costs.)
> 5. **Board:** Is every "On Play / When Attacking / Activate: Main / End of Turn" effect used or deliberately skipped? Blockers positioned? Anything left vulnerable to their known removal?

**Before the first attack each turn: "Lethal? Their lethal?"** Can I win this turn under worst-case counters? If not, which attack order maximizes counter pressure?

**Drill.**
- **Week 1–2:** say L-C-T-D-B aloud (sim client) on every pass, even when it is obvious.
- **Week 3+:** run it silently, and tap the table once as a physical anchor.
- **Measure.** `MP-Mechanical` and `MP-Sequencing` tags per game (1.3). You should see a drop within 2–3 weeks if the habit is executed. **Time cost.** About 5–10 s per turn. Budget it into clock planning (6.2).

### 2.2 Planning lines and "Who's the Beatdown?" [Advanced]
**What.** Plan 2–3 turns ahead toward a concrete win condition. Explicitly decide whether you are the aggressor or the defender in this game.
**Why.**
- Mike Flores' classic MTG essay "Who's the Beatdown?" (1999) argues that misassigning roles is the most common way to lose a game you should win. Chapin's *Next Level Magic* (2010) extends this into structured turn planning ([Chapin, Wikipedia](https://en.wikipedia.org/wiki/Patrick_Chapin)). *(I did not retrieve the essay text in this research pass. The concept is well established in the MTG literature.)*
- In OPTCG, roles are unusually explicit. Life is a resource that converts into cards (and triggers), so the control role often *wants* to take early hits. The beatdown role has to count how many counters the opponent must spend per point of life.

**Drill: "Plan-Out-Loud".**
- At the start of each of your turns in practice games, say: *"Role: X. Win turn target: N. This turn's job: Y."*
- After the game, mark whether the plan held, changed for a good reason, or was abandoned on autopilot.
- **Frequency.** Every practice game for 2 weeks, then spot-checks.
- **Measure.** `MR-Role` and `MP-Line` tag rate. "Plan abandoned without reason" count.

### 2.3 Playing to your outs [Advanced]
**What.** When you are behind, identify the specific draws or opponent mistakes that win, and play the line that maximizes their probability, even if it loses harder when the outs miss.
**Why.** It is a core concept in MTG strategy writing, part of the canon Reid Duke's *Level One* course covers ([Level One: The Full Course](https://magic.wizards.com/en/news/feature/level-one-full-course-2015-10-05)). Poker teaches the same thing as "count outs × draws." Without it, players minimize the margin of a loss instead of maximizing win %.

**OPTCG specifics.** Your outs include:
- **Your draws:** next draw plus any searcher looks.
- **Your life triggers:** each hit you take is a free lottery ticket, so you can sometimes *want* to be hit.
- **Opponent counter shortfall:** a hand-size read.
- **Opponent misplays:** a legitimate out against weaker players under time pressure, but never your primary plan.

**Drill: "Outs Count".**
- In 1.2c puzzles that are losing positions, write (a) the list of outs, (b) the probability of each, using 3.1, and (c) the line that keeps the most outs live. Then compare with the line you actually played.
- **Measure.** Count of "played to minimize loss margin instead of maximize win %" errors per review.

### 2.4 Hand reading and range building [Advanced → Pro]
**What.** Maintain a probabilistic model of the opponent's hand, built from cards seen, searches, mulligans, plays not made, counters used or withheld, and timing tells.
**Why.** Poker range reading is the canonical version. In OPTCG the counter economy makes hand reading directly valuable, because every attack decision is a bet on their counters.

**OPTCG range inputs (*synthesis*):**
- **Searches.** The cards they took *and* the ones they bottomed. Bottomed cards are public information about what they don't need.
- **Unused DON.** If they ended a turn with DON active and no plays, they likely hold event counters or reactive cards. Note a known DON-cost counter event.
- **Counter behavior.** Countering early at high life signals a strong counter hand or a must-protect character. Taking hits at 4–5 life signals control posture or a weak counter hand.
- **Hand size over time.** Combine with the expected counters per card in their list (3.1).
- **Deck lists.** Tier-1 lists are public (Limitless and similar), so know each tier-1 deck's counter density and trigger count.

**Drill: "Hand Guess".**
- In sim or recorded games, at the end of each opponent turn write: their hand size; your estimated number of +1000-equivalent counters; and the 1–2 specific cards you think they hold.
- At game end, if they reveal or the sim shows hands, score yourself.
- **Frequency.** 1 game per session. **Measure.** Mean absolute error of the counter-count estimate. % accuracy of specific-card guesses.

### 2.5 Outcome prediction and calibration [Advanced]
**What.** Predict outcomes (game win %, "this attack gets countered," "they have the board wipe") with explicit probabilities, then score how well calibrated you are.
**Why.** Calibration training with feedback is the core method of forecasting research (Tetlock & Gardner, *Superforecasting*, 2015, Brier scoring). It also forces honest uncertainty, which is the antidote to resulting (Duke). Players who overestimate their win % in "safe" spots under-protect. That is overconfidence (7.4).

**Drill: "Turn-3 Forecast".**
- At the start of your turn 3 and at each top-of-turn in games you review, write P(win).
- Before each key attack, write P(counter) or P(this resolves).
- Score with a Brier score: mean of (forecast − outcome)², where lower is better.
- **Frequency.** Every tournament game (just the turn-3 forecast) and every review session (full). **Measure.** A calibration curve on the site. Bucket forecasts in 10% bins; a well-calibrated player's 70% bin wins about 70%. Needs about 100+ forecasts to be meaningful.

---

## 3. QUANTITATIVE FOUNDATIONS

### 3.1 Hypergeometric thinking for OPTCG [Intermediate → Advanced]
**What.** The hypergeometric distribution gives P(drawing *k* successes in *n* cards from a deck of *N* containing *K* successes) without replacement. It is the backbone of Frank Karsten's MTG deck math ([Karsten, "An Introduction to the Hypergeometric Distribution" (mirror)](https://www.orkerhulen.dk/onewebmedia/An%20Introduction%20to%20the%20Hypergeometric%20Distribution%20.pdf); [Karsten, "How Many Lands…" (mirror)](https://www.orkerhulen.dk/onewebmedia/How%20Many%20Lands%20Do%20You%20Need%20to%20Consistently%20Hit%20Your%20Land%20Drops.pdf)). Use it to replace "feels likely" with numbers you can memorize.

**Key OPTCG insight: life cards are random hidden removal.** Life is set from the top of a shuffled deck *after* the mulligan. So from your perspective, an unknown life card is just as likely to be any card as the next draw. Life does **not** change your odds of drawing a card. It does mean that ~10% of your deck (5 of 50) sits in life, and you get those cards when you take hits. Taking damage is "drawing" from a sub-deck where triggers can fire *(derived from the rules above)*.

**Reference table** (computed for this document; 50-card deck):

| Question | Probability |
|---|---|
| ≥1 copy of a specific 4-of in opening 5 | **35.3%** |
| Same, if you mulligan every hand that misses it (ignores other mulligan reasons) | **58.1%** |
| ≥1 of a 4-of by 6 / 7 / 8 cards seen | 41.1% / 46.4% / 51.4% |
| ≥1 copy of *each* of two specific 4-ofs in 7 cards | 19.8% |
| "Look at top 5" searcher hits ≥1 of **8** valid targets | 59.9% |
| Same with **12** valid targets | 76.3% |
| ≥1 Trigger among 5 life cards, deck runs 6 / 8 / 10 / 12 triggers | 48.7% / 59.9% / 68.9% / 76.3% |
| ≥2 Triggers in 5 life, same counts | 10.3% / 17.6% / 25.8% / 34.5% |

**Opponent counters** (assume 20 counter-bearing cards among 45 unknown cards):

| Opp. hand size | Expected counter cards | P(≥2) | P(≥3) |
|---|---|---|---|
| 4 | 1.8 | 60.6% | 22.4% |
| 5 | 2.2 | 74.9% | 39.2% |
| 6 | 2.7 | 84.8% | 55.3% |
| 7 | 3.1 | 91.1% | 68.9% |

**Rules of thumb to memorize:**
- A 4-of is in your opener only about 1/3 of the time, and is still a coin flip by 8 cards. **Do not build game plans that need one specific 4-of on curve.** Count *functional* copies instead: searchers plus copies.
- Each trigger in a deck adds roughly 2 percentage points to P(≥1 trigger in 5 life). The probability that a single hit flips a trigger is simply triggers ÷ unknown cards remaining.
- Opponent hand of 6+ at 2+ life: assume at least 2 counter cards. Plan attacks so that the *second* swing is the one that matters.

**Drills.**
- **"Number Flash"** [Intermediate]: 20 flashcards from the table above plus your own decklist's numbers (searcher hit rates, trigger count). Run 5 min/day for 2 weeks, then weekly. **Measure.** % correct within ±5pp.
- **"Deck Math Sheet"** [Advanced]: for every list you register, compute and print on 1 page: P(key card by T2/T3 on play and draw); searcher hit rate; expected triggers in life; counter density (total counter value ÷ 50). **Time.** 30 min per list. The site can automate this as a hypergeometric calculator that takes a decklist.
- **"Out Probability"** [Advanced]: in 2.3 drills, attach numbers to every out.

### 3.2 Resource math: DON curve, life as resource, counter economy [Advanced]
**What.** Treat DON, life, cards, and counters as one convertible economy.
**Why** *(synthesis)*. OPTCG's distinctive tension is that defending with counters costs cards, while taking damage gains cards but risks lethal and gives the opponent trigger exposure. Pokémon's "prize mapping" (planning which knockouts take which prizes) is the closest analog in another game *(adaptation)*.

**Drill: "Exchange Ledger".**
- In 5 reviewed games, log every attack as: attacker power, counter spent (cards), and life lost.
- Compute "cards spent per life point denied" for each player. The player with the better exchange rate usually wins. Find the turns where you made poor exchanges.
- **Measure.** Your average exchange rate by matchup, compared with your win rate in that matchup.

---

## 4. PREPARATION

### 4.1 Meta analysis and deck selection [Advanced]
**What.** Pick the deck that maximizes expected match wins against the *expected field at this event*, weighted by your own skill with each deck.
**Why.**
- Field-weighted win rate is the standard MTG method (Karsten and others).
- Expected win rate = Σ (field share × your matchup win%).
- Matchup numbers are noisy (see 4.2), so prefer decks whose spread is robust, with no catastrophic matchups against the top 2–3 decks. Do not pick a deck for a high ceiling against one target.
- **Your own skill multiplier is real.** A deck you have played 200+ games with often beats a theoretically better deck you have played 30 games with *(widely held pro heuristic; not a controlled finding)*.

**Routine: "Field Model".**
1. At T-14 days, pull the last 2–4 weeks of large-event results (Limitless, official top cuts). Weight recent events and similar-size events more heavily.
2. Estimate field shares for the top 6 decks plus an "other" bucket.
3. Fill a matchup matrix with your data where n ≥ 30, and community data otherwise. Mark every cell as LOW, MED, or HIGH confidence.
4. Compute expected win % for 2–3 candidate decks, plus a **familiarity adjustment** of −3 to −8pp for decks under 100 games *(heuristic)*.
5. **Lock the deck at T-7** (see 7.5).

**Measure.** Post-event, compare your predicted field shares with the actual ones, and your predicted win % with your result. Track this over events to calibrate your meta-reading.

### 4.2 Matchup testing methodology and sample-size traps [Advanced]
**What.** Structured testing that generates usable information about a matchup and about *how to play it*, not only a win rate.
**Why: sample size.**
- Frank Karsten's ChannelFireball article shows that a **7–3 record has a 95% confidence interval of roughly 35%–93%** for the true game win rate ([Karsten, "How Many Games Do You Need for Statistical Significance in Playtesting"](https://strategy.channelfireball.com/mtg/channelmagic-articles/magic-math-how-many-games-do-you-need-for-statistical-significance-in-playtesting/)).
- Detecting a 55% vs. 50% edge with 80% power needs roughly 800 games: (1.96+0.84)² × 0.25 / 0.05² ≈ 784 (standard power calculation).
- **Conclusion.** Personal testing can tell you "this matchup is lopsided" or "this line works." It cannot give a precise percentage. Rely on large aggregate datasets for percentages. The same lesson appears in Hearthstone's large-sample stats sites such as Vicious Syndicate and HSReplay, which exist because individual samples are too small.

**Methodology (*synthesis*):**
- **Test questions, not records.** Write the hypothesis first: "Does mulliganing for X improve the turn-4 position against deck Y?" or "Is going second correct in this matchup?"
- **Control the opponent pilot.** Testing against a weak pilot inflates your numbers, and this is a major source of overconfidence. Rotate pilots, or have the opponent play from a written "best-practices" sheet for that deck.
- **Record play/draw splits.** In OPTCG, first player does not draw on turn 1 and gets less DON on turn 1, so play/draw asymmetry is large. Log it.
- **Freeze key turns.** After each test game, save 1 decision point to the puzzle bank (1.2c). The *lines* you learn are worth more than the W/L.
- **Stop rule.** After 10–15 games of a matchup, stop collecting W/L. Switch to targeted scenario replays of the 2–3 decisive turns.

**Measure.** Number of written hypotheses resolved per week. Number of "matchup guide" entries written (4.3).

### 4.3 New-deck learning pipeline [Intermediate → Advanced]
**Stages** *(synthesis)*. Each stage has an exit criterion so you know when to move on.

| Stage | Activity | Exit criterion | Time |
|---|---|---|---|
| 1. Read | Read all card text, the leader ability, top-player lists, and any written guides | Can recite the leader's ability and the 10 most important cards from memory | 1 h |
| 2. Math | Fill the Deck Math Sheet (3.1) | Sheet printed | 30 min |
| 3. Goldfish | Run the Curve Audit (1.2a), 20 games | Median curve and mulligan guide written | 1 h |
| 4. Watch | Pause-Predict-Reveal (1.4) on 2–3 top players' VODs with the deck | Agreement ≥ 70% on DON-ALLOC and ATK-ORDER | 2 h |
| 5. Gauntlet | 10 games against each of the top 3 decks with a strong pilot | One-page matchup guide per deck: role, key turns, mulligan priorities, what to save counters for | 6–8 h |
| 6. Stress | Play 5 games under a 25-min game clock while tired (evening) | No `MR-Rules` or `MP-Mechanical` tags across 5 games | 2–3 h |

**Total.** About 12–15 hours before the deck is "tournament ready" at your level.

### 4.4 Tournament prep timeline [Intermediate]
*(synthesis; assembled from common MTG and PTCG pro practice plus the evidence in 5.4)*

| When | Tasks |
|---|---|
| **T-21 to T-14** | Field model v1 (4.1). Shortlist 2–3 decks. Run the new-deck pipeline for anything unfamiliar. |
| **T-14 to T-8** | Gauntlet testing using question-driven methodology (4.2). Pod review of difficult matchups (1.5). |
| **T-7** | **Deck lock.** Field model v2. Final list chosen; up to 2 flex slots may change by T-3 *only* for a documented reason. Print the matchup cheat sheet. |
| **T-6 to T-2** | Daily: 20-min puzzle set from the chosen deck's matchups, Number Flash, and 2–3 practice games under the real clock. Start the sleep schedule shift if the event start time differs from your normal wake time (5.4). |
| **T-1** | No new information: no new lists, no late-night testing. Pack the kit (sleeves, spares, deck registration, water, food, charger, earplugs). Review cheat sheets for 30 min max. Sleep at least 7.5 h in bed. |
| **T-0** | Run the morning routine (6.1). |
| **T+1 to T+3** | Debrief: decision-journal summary, VOD the 3 losses plus 2 close wins, update the field-model accuracy log, update the mistake-tag chart. |

---

## 5. PERFORMANCE STATE

### 5.1 Mental game: the A/B/C-game inchworm and tilt profiles [Intermediate → Advanced]
**What.** Jared Tendler's model (*The Mental Game of Poker*, 2011):
- Your performance is a range, like an inchworm. The **A-game** is the infrequent best, the **B-game** is the typical middle, and the **C-game** is the infrequent worst.
- You improve by moving the whole range forward. That happens largely by *eliminating C-game errors*, which frees mental capacity to push the A-game further ([Hendon Mob excerpt: Inchworm](https://www.thehendonmob.com/?p=1929)).
- Tilt is what pulls you into C-game, and Tendler's method is to map your personal tilt triggers ([PokerNews interview](https://www.pokernews.com/strategy/strategy-with-kristy-jared-tendler-the-mental-game-of-poker-11630.htm)). He frames tilt as having distinct types; the commonly cited ones are running bad, injustice, hate-losing, mistake, entitlement, and revenge tilt.

**Why this matters for consistency.** Your top-8 shows your A-game is already top-level. **Your inconsistency is the width of your inchworm.** Tightening the C-game end is worth more expected placement than raising the A-game.

**Drill: "A/C-Game Analysis" (Tendler's core exercise).**
1. Write 2 columns, **A-game** and **C-game**, with 8–15 concrete, observable traits each. Examples:
   - A-game: "I count their max damage before every pass." "I take 5+ seconds on CTR-USE."
   - C-game: "I attack before checking triggers." "I sigh and skip the blunder check." "I assume they have nothing."
2. Add a middle **B-game** column.
3. **Tilt map:** list the 3–5 situations that move you toward C, such as losing to a turn-2 trigger, a slow-playing opponent, or being paired down. For each, list the first sign (body, thought, or behavior) and a written if-then response (implementation intention, 2.1).
4. Re-read the map before every event and between rounds when needed.

**Measure.** After each game, self-rate A, B, or C. Track the % of C-game rounds per event and correlate it with the `STATE-*` tags.

### 5.2 Focus and attention control [Advanced]
**What.** Keep attention on decision-relevant features for 6–9 hours of rounds.
**Why.** Vigilant attention is the cognitive function most consistently degraded by sleep loss and time awake (Lim & Dinges 2010 meta-analysis, *Psychological Bulletin* 136(3), largest effects on lapses of simple attention) ([PDF](https://www.med.upenn.edu/uep/assets/user-content/documents/LimDinges2010MetaAnalysis.pdf)). Attention lapses produce the omission errors that L-C-T-D-B (2.1) is built to catch.

**Routines:**
- **Anchors.** Use a physical cue (tap the table) before each pass, tied to the blunder check.
- **Narrow external focus during opponent turns.** Track counters used, hand size, and DON left. That feeds 2.4 and keeps you from drifting.
- **Between games, broad and relaxed.** Do not replay the last game in your head. Use the reset in 6.1.
- **Drill: "Long Session Simulation".** 1x per month, play 6–8 sim rounds back-to-back with real timers and 10-min breaks. Log tag rates by round number. **Measure.** The slope of mistakes per game across rounds 1→8. A flat slope is the goal.

### 5.3 Variance management and results-oriented thinking [Intermediate]
**What.** Separate decision quality from outcomes, and set goals on process metrics, not placements.
**Why.**
- Resulting (Duke) corrupts learning. You "fix" correct plays that lost, and you reinforce bad plays that won.
- Bo1 Swiss events, the common OPTCG format (see 0), carry high per-match variance. Even a big edge produces volatile placements over a 7–9 round Swiss.
- Back-of-envelope: a player who wins 60% of matches has only about a 23% chance of going 7–2 or better in 9 rounds (binomial), even with no mistakes *(computed; illustrative)*.

**Routines:**
- **Process goals for events:** "≤1 `MP-Mechanical` per round," "blunder check on 100% of passes," "turn-3 forecast every game." Score these before looking at the placement.
- **Variance budget.** Tag each loss with `VAR` only if you would make every tagged decision again, and pod review agrees (1.5). This keeps `VAR` honest, because it is easy to over-tag losses as variance.
- **Season view.** Judge yourself on rolling 3-month conversion (top-cut rate over 6+ events), not single events.

### 5.4 Sleep, nutrition, and physical prep for long events [Intermediate]
**Why.**
- Sleep loss reliably degrades attention and working memory, which are the inputs to counting damage and tracking counters (Lim & Dinges 2010).
- Long-day decision performance also suffers from fatigue *(general sport-science consensus)*.
- The often-cited "parole judges and lunch" decision-fatigue study (Danziger et al. 2011) is **contested**, so it is not relied on here.

**Protocol** *(standard sleep and sports-nutrition guidance; not OPTCG-specific evidence)*:
- **Sleep.** 7–9 h for at least the 3 nights before the event. Shift your wake time toward event check-in time by 30 min/day, starting T-4 if needed. No screen-testing after 23:00 at T-1.
- **Caffeine.** Use what you normally use; do not add more on event day. Time doses for mid-rounds (for example R3–R4) rather than all at the start. Stop about 8 h before you intend to sleep if it is a 2-day event.
- **Food.** Eat a normal, carb-plus-protein breakfast. Carry small snacks (nuts, fruit, bars) and eat something every 2 rounds. Avoid a heavy lunch that sinks you in the afternoon rounds.
- **Hydration.** Carry a 1L bottle and refill it at the halfway point. Mild dehydration affects mood and attention.
- **Movement.** Do a 3–5 min walk between rounds, not standing in the pairing crowd.
- **Kit.** Earplugs or noise-reducing earbuds for between rounds, a jacket (venues vary in temperature), a charger, and spare sleeves.

**Measure.** Pre-event checklist completion (yes/no on each item). Correlate sleep hours the night before with `STATE-fatigue` tags per event.

---

## 6. TOURNAMENT EXECUTION

### 6.1 Pre-event and between-round reset routine [Intermediate]
**What.** A fixed, short routine so that every round starts from the same mental baseline.
**Why.** This is Tendler's "warm-up and cool-down" logic: deliberately reset emotional carryover between sessions. Combined with implementation intentions (2.1), it puts the response in place before tilt fires.

**Morning (15 min):** re-read the tilt map (5.1). Read the 3 process goals. Do 5 Number Flash cards and 2 puzzles as a warm-up. Do a breathing reset: 4 s in, 6 s out, ×6.

**Between rounds: the 4-step "Log-Let-Fuel-Focus" (≈5–8 min) *(synthesis)*:**
1. **Log (90 s).** Write the result, A/B/C rating, 1 tag, and 1 sentence. Writing externalizes the game so you can stop ruminating.
2. **Let go (60 s).** Do 6 slow breaths. Say a fixed phrase, such as "Next game is 0–0."
3. **Fuel (2 min).** Water and a snack. Do a short walk if time allows.
4. **Focus (2 min).** When pairings go up, look up the opponent's likely deck if known. Read that matchup's cheat-sheet line: role, mulligan priority, and what to save counters for.

**After a loss with tilt signs:** add a 2-min walk. Read the tilt-map response for that trigger.
**After a win against a "weaker" opponent:** read the anti-overconfidence line in 7.4.

### 6.2 Clock, time, and fatigue management [Advanced]
**What.** Manage the round clock (often 30 min in official Bo1) and your energy across 7–9 rounds plus a top cut.
**Why** *(synthesis)*. Clock pressure creates rushed omissions (`STATE-clock`). Too much speed causes the same mechanical errors as fatigue. Time is a resource to spend on high-leverage decisions (CTR-USE, LETHAL), not evenly.

**Routines:**
- **Tempo baseline.** In practice, time your games. Know your median game length per matchup, and know which matchups run long.
- **Spend-save rule.** Play fast on routine turns (mulligan-obvious keeps, forced lines). Slow down on `LETHAL`, `CTR-USE`, and `ROLE` turns. Your blunder check costs 5–10 s; do not cut it.
- **Draw risk.** If draws are possible in your event's format, decide in advance how you play at "time called." Know the event's end-of-round procedure.
- **Energy curve.** Plan your hardest focus for when you expect the toughest rounds (late Swiss bubble rounds). Take an extra snack before the bubble round.
- **Drill.** In 1 practice session per week, play with a visible clock and a 25-min hard cap. **Measure.** % of games finished in time; `STATE-clock` tags per event.

---

## 7. CONSISTENCY DIAGNOSTICS: why strong players are inconsistent, and what to do

### 7.0 Framing
At your level, skill is proven: a top-8 result and many wins. **Inconsistency is mostly variance in the operator and the preparation, not a lack of card-game skill.** Tendler's inchworm framing (5.1) says the job is to narrow the gap between your A-game and C-game. The interventions below map each root cause to a measurable fix.

**Step 1 for the site: diagnose.** Use the decision journal (1.3) for 30+ tournament games. Count tags per root cause. Prioritize whichever of 7.1–7.6 has the most tags. **Do not guess. Count.**

### 7.1 Fatigue
**Signature.** Mistake rate rises in late rounds. `MP-Mechanical` and `STATE-fatigue` tags cluster in R6+. You lose bubble rounds you "should" win.
**Mechanism.** Sustained attention degrades with time awake and sleep loss (Lim & Dinges 2010). Omissions rise first.
**Interventions:**
1. Sleep protocol (5.4) at T-3 to T-1. This is non-negotiable.
2. A food and water schedule tied to rounds (5.4).
3. The blunder check (2.1) as an external scaffold that does not rely on vigilance.
4. A monthly Long Session Simulation (5.2) to train stamina and measure your fatigue slope.

**Metric.** Mistakes per game in R1–3 compared with R6+. Target a ratio ≤ 1.2.

### 7.2 Autopilot
**Signature.** "I didn't even think about it" errors: unused effects, forgotten DON, not considering their trigger. These show up in familiar matchups and in games that feel easy.
**Mechanism.** Expertise makes play fluent. Fluency skips the checks that slower play ran by default. This is the card-game version of Heisman's "Hope Chess."
**Interventions:**
1. L-C-T-D-B (2.1) with a physical anchor on *every* pass, including obvious ones.
2. Plan-Out-Loud (2.2) for one turn per game, even in tournaments (silently).
3. Turn-3 forecasts (2.5). Writing a number forces you to engage.

**Metric.** `STATE-autopilot` plus `MP-Mechanical` per game. Blunder-check completion % (self-reported).

### 7.3 Tilt
**Signature.** Losses cluster: one bad beat leads to the next round's loss. `MR-Hand` errors go up after a loss (assuming the worst, or the best). You play faster after a loss.
**Mechanism.** Tendler: tilt has personal, predictable triggers. Emotion crowds out the working memory available for the game.
**Interventions:**
1. The tilt map and A/C-game sheet (5.1), written and re-read pre-event.
2. The between-round reset (6.1), with the post-loss branch.
3. If-then plans for your top 3 tilt triggers (implementation intentions; Gollwitzer & Sheeran 2006).
4. A post-event review that separates `VAR` from real errors (5.3). This removes the injustice fuel.

**Metric.** Conditional win rate: P(win R_n | lost R_n-1) compared with your overall win rate. A gap above 10pp across 30+ rounds signals tilt carry-over.

### 7.4 Overconfidence against weaker opponents
**Signature.** Losses to lower-rated or unknown players. Rushed attacks into unknown hands. You skip hand reading ("they won't have it"). Your turn-3 forecasts are high but outcomes in that bucket are lower.
**Mechanism.** You discount the opponent's range and the role of variance. Inflated testing against weak pilots (4.2) compounds the problem.
**Interventions:**
1. **"Respect the range" rule.** Assume an unknown opponent has the tier-1 list's average counter density (3.1 table) until shown otherwise.
2. Calibration tracking (2.5). Your forecasts against perceived-weaker players will show the overconfidence in numbers.
3. **Paired-down routine (6.1):** read one line before the round, e.g. "Variance doesn't care about their record. Full checks."
4. **Play to their best play.** Their misplays are a bonus out, never the plan (2.3).

**Metric.** Win rate split into "expected-easy" vs. other rounds (tag before the round). Calibration error in the 70–90% buckets.

### 7.5 Deck-choice drift
**Signature.**
- You switch decks late, influenced by the last week's results, a stream, or a friend.
- You register a deck with fewer than 100 games played.
- `PREP` and `MR-Rules` tags rise.
- `DB-Choice` tags appear in post-event review.

**Mechanism.** Recency bias plus the novelty pull. A familiarity deficit costs more than most meta edges, though that is a heuristic and not a measured finding.
**Interventions:**
1. **Deck lock at T-7** (4.4). Changes after lock require a written reason that names a field-model input that changed.
2. **The familiarity adjustment** in the Field Model (4.1).
3. A **"main deck" policy for the season:** one primary deck, played to 200+ games, with one backup deck kept at about 60 games. This is the classic specialist strategy.
4. A post-event check of **predicted vs. actual field** (4.1). This tests whether late switches were justified.

**Metric.** Games played with the registered deck before each event. Count of post-lock changes. Results in events where you played your main deck vs. other decks.

### 7.6 Preparation gaps
**Signature.** Losses concentrated in 1–2 matchups or against a specific tech card. "I didn't know that card" moments. `PREP` tags.
**Mechanism.** Testing time went to favorite matchups and comfortable reps, not to the matchup matrix weighted by field share.
**Interventions:**
1. **Field-weighted testing allocation.** Hours per matchup should be proportional to field share × uncertainty.
2. One-page matchup guides for every deck at 5%+ of the field (4.3 Stage 5).
3. **"Card awareness" deck.** Make flashcards of every card in tier-1 and tier-2 lists, including common tech. Drill them in 5 min per day before events.
4. **A pre-event coverage check.** Every deck at 5%+ of the field must have a matchup guide plus at least 10 test games or 3 reviewed top-player VODs.

**Metric.** % of field share covered by a written guide before the event. `PREP` tags per event, which should trend to about 0.

### 7.7 Consistency scorecard (one page)
After each event, fill in:

| Root cause | Metric | This event | Rolling 3-event avg |
|---|---|---|---|
| Fatigue | Mistakes R6+ ÷ R1–3 | | |
| Autopilot | Autopilot + Mechanical tags per game | | |
| Tilt | Win% after a loss minus overall win% | | |
| Overconfidence | Win% in "expected-easy" rounds | | |
| Deck drift | Games with registered deck | | |
| Prep gaps | % field covered by a guide; PREP tags | | |

---

## 8. TRAINING TEMPLATES (weekly plans)

All templates assume about 1 event every 2–4 weeks. In event weeks, switch to the 4.4 timeline.

### 8.1 Minimal: 3–4 h per week
| Day | Session | Time |
|---|---|---|
| Mon | Journal review of last week's games + 1 own-game VOD review (3-5-1 lite) | 45 min |
| Wed | 10 puzzles (1.2c) + Number Flash | 30 min |
| Fri | 3 practice games with forecasts and blunder check aloud | 90 min |
| Sun | Field-model update + 1 top-cut VOD with Pause-Predict-Reveal | 45 min |
**Focus.** Keep the core habits alive (2.1, 1.3, 2.5). Do not try new decks.

### 8.2 Committed: 8–10 h per week
| Day | Session | Time |
|---|---|---|
| Mon | Own-game review (3 losses, 5 close wins) + tagging | 75 min |
| Tue | Gauntlet testing: question-driven, 1 matchup, 5–6 games | 2 h |
| Wed | Puzzles (10) + Hand Guess game + Number Flash | 60 min |
| Thu | Pod review (1.5) | 60 min |
| Fri | Pro VOD Pause-Predict-Reveal ×1 + matchup guide update | 75 min |
| Sat | Locals or online event with full tournament routines (6.1) and journal | 2.5–3 h |
| Sun | Rest, or 30 min weekly scorecard + plan | 30 min |
**Study:play ratio** ≈ 0.6. That matches the deliberate-practice emphasis (1.1).

### 8.3 Intensive: 15–20 h per week (pre-major block, 2–3 weeks max)
| Day | Session | Time |
|---|---|---|
| Mon | Own-game review + tagging; field model | 2 h |
| Tue | Gauntlet: 2 matchups, hypothesis-driven | 3 h |
| Wed | Puzzles (15) + two-handed Mirror Pressure (2 games) + Deck Math Sheet | 2.5 h |
| Thu | Pod review + paid or traded coaching session (monthly) | 2 h |
| Fri | Long Session Simulation (6 rounds, timed) | 4 h |
| Sat | Event or high-level online event + journal | 4–6 h |
| Sun | Recovery: 45-min scorecard, no play | 45 min |
**Guardrails.** Hold the sleep protocol all block. Take 1 full rest day. Deck lock rules apply (7.5). More volume under fatigue trains C-game habits *(synthesis)*.

### 8.4 Daily micro-habit (any budget, 10 min)
5 Number Flash cards, 3 puzzles, and 1 line in the training journal saying what you will do differently next game.

---

## 9. METRICS DASHBOARD (for the site)
| Metric | Source | Target / use |
|---|---|---|
| Mistakes per game by tag | Decision journal (1.3) | Downtrend in MP and MR; stable VAR |
| Blunder-check completion % | Self-report per event | ≥ 95% |
| Brier score and calibration curve | Forecasts (2.5) | Improving; 70% bin ≈ 70% |
| Puzzle accuracy (3-min vs. 10-min) | Puzzle bank (1.2c) | ↑ |
| Agreement with pro lines | VOD drill (1.4) | ↑, especially ATK-ORDER and CTR-USE |
| Counter-estimate error | Hand Guess (2.4) | ↓ |
| Study:play hour ratio | Time log | ≥ 0.33 |
| Fatigue slope (R6+ ÷ R1–3) | Journal | ≤ 1.2 |
| Post-loss win rate gap | Journal | < 10pp |
| Games with registered deck | Time log | ≥ 100 (main deck ≥ 200) |
| Field-coverage % | Prep checklist | 100% of decks at 5%+ |
| Top-cut conversion (rolling 6 events) | Results | Outcome metric. Watch it, but do not train on it |

---

## 10. SOURCES

**Deliberate practice and expertise**
- Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. *Psychological Review*, 100(3), 363–406.
- Charness, N., Tuffiash, M., Krampe, R., Reingold, E., & Vasyukova, E. (2005). The role of deliberate practice in chess expertise. *Applied Cognitive Psychology*, 19, 151–165. https://zendy.io/title/10.1002/acp.1106
- Macnamara, B. N., Hambrick, D. Z., & Oswald, F. L. (2014). Deliberate practice and performance in music, games, sports, education, and professions: A meta-analysis. *Psychological Science*. Summary: https://www.princeton.edu/news/2014/07/03/becoming-expert-takes-more-practice
- Burgoyne, A. P., et al. (2019). The impact of domain-specific experience on chess skill. *American Journal of Psychology*. https://englelab.gatech.edu/articles/2019/Burgoyne_et_al_2019_AJP.pdf

**Mental game, decisions, and habit**
- Tendler, J. (2011). *The Mental Game of Poker*. Inchworm excerpt: https://www.thehendonmob.com/?p=1929 ; interview: https://www.pokernews.com/strategy/strategy-with-kristy-jared-tendler-the-mental-game-of-poker-11630.htm
- Duke, A. (2018). *Thinking in Bets*. Summaries: https://www.sachinrekhi.com/thinking-in-bets-annie-duke ; https://rosetta.to/u/talksatgoogle/thinking-in-bets-annie-duke-talks-at-google
- Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis. *Advances in Experimental Social Psychology*, 38, 69–119. Review: https://www.frontiersin.org/articles/10.3389/fnhum.2015.00395/full
- Tetlock, P., & Gardner, D. (2015). *Superforecasting*. (Calibration and Brier scoring; cited from general knowledge, not retrieved in this pass.)

**Physiology**
- Lim, J., & Dinges, D. F. (2010). A meta-analysis of the impact of short-term sleep deprivation on cognitive variables. *Psychological Bulletin*, 136(3), 375–389. https://www.med.upenn.edu/uep/assets/user-content/documents/LimDinges2010MetaAnalysis.pdf

**Card-game strategy**
- Duke, R. *Level One* (course, Wizards of the Coast, 2014–2015). https://magic.wizards.com/en/news/feature/level-one-full-course-2015-10-05
- Karsten, F. "An Introduction to the Hypergeometric Distribution for Magic Players" (ChannelFireball, 2018; mirror). https://www.orkerhulen.dk/onewebmedia/An%20Introduction%20to%20the%20Hypergeometric%20Distribution%20.pdf
- Karsten, F. "How Many Lands Do You Need to Consistently Hit Your Land Drops?" (ChannelFireball, 2017; mirror). https://www.orkerhulen.dk/onewebmedia/How%20Many%20Lands%20Do%20You%20Need%20to%20Consistently%20Hit%20Your%20Land%20Drops.pdf
- Karsten, F. "Magic Math: How Many Games Do You Need for Statistical Significance in Playtesting?" (ChannelFireball). https://strategy.channelfireball.com/mtg/channelmagic-articles/magic-math-how-many-games-do-you-need-for-statistical-significance-in-playtesting/
- Chapin, P. (2010). *Next Level Magic*. https://en.wikipedia.org/wiki/Patrick_Chapin
- Flores, M. (1999). "Who's the Beatdown?" (Classic essay; text not retrieved in this pass.)
- Heisman, D. "Checking for safety requires more than using tactical vision" (Chess.com; Hope Chess and the checks/captures/threats routine). https://www.chess.com/blog/danheisman/checking-for-safety-requires-more-than-using-tactical-vision

**OPTCG rules and formats**
- Bandai, One Piece Card Game Comprehensive Rules. https://en.onepiece-cardgame.com/pdf/rule_comprehensive.pdf
- Bandai, Official Rule Manual. https://en.onepiece-cardgame.com/pdf/rule_manual.pdf
- Bandai, Championship 2024 Rules. https://en.onepiece-cardgame.com/pdf/championship2024_rules.pdf
- Bandai, CS2025 World Final rules. https://en.onepiece-cardgame.com/pdf/rule_cs2025_worldfinal.pdf
- Bandai, 26-27 Regionals Season 1. https://en.onepiece-cardgame.com/events/regional-season1-26-27.html
- onepiece.gg rules and glossary. https://onepiece.gg/rules/comprehensive-rules/ ; https://onepiece.gg/rules/glossary/

**Known gaps in this research pass**
- I did not retrieve specific PV or LSV articles, Pokémon TCG or Yu-Gi-Oh primary improvement writing, or Hearthstone pro writing. Ideas from those communities (prize mapping, aggregate-stats culture, outs counting) are labeled *(adaptation)*.
- The OPTCG probability tables use a generic "20 counter cards" assumption. Replace it with real tier-1 list counts in the site's calculator.
- Check OPTCG event formats (Bo1 vs. Bo3, round time) per event; they have changed by season.
