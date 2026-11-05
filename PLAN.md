# OnePieceTrainer: Improvement Hub Plan (v0.1, brainstorm output)

## 1. Product idea
A static GitHub Pages site that answers one question: **"Where am I right now, and what should I do next to get better?"**
Not a link dump. A **guided skill map + next-step engine**. You pick your situation, and the site gives a short, ordered routine with links.

Entry paths (the "any stage" requirement):
1. **"I want to get better at the game"** -> skill diagnostic -> weakest area -> drills
2. **"I'm learning a new deck"** -> deck-learning pipeline (below)
3. **"I have an event in N days"** -> tournament prep countdown plan
4. **"I just lost / just played"** -> post-game review checklist
5. **"I have 20 minutes"** -> one micro-drill

## 2. Concept catalog (the skill tree)
Your ideas, sharpened, plus gaps I found. Each becomes a "node" with: what it is, why it works, how to do it, time cost, level, links.

### A. Foundations
- **Rules & timing mastery**: card text, trigger timing, battle steps, damage/trigger resolution, judge-level rules (ties to the official rules manual + errata). Cheap wins: most misplays at low level are rules/timing.
- **Resource math (DON!!, life, hand, board)**: tempo curve, DON!! efficiency, "what did this turn cost me".
- **Fundamental concepts**: tempo vs value, card advantage, life as resource, when to attack/not, blocker/counter management, trigger awareness, trashing for info.
- **Mulligan & opening curve theory**.

### B. Practice modes
- **Solo vs Self** (goldfishing + two-handed play): goldfish for consistency/curves; two-handed to learn matchup from both sides; "hand-reveal" mode to practice reading.
- **Simulator reps** (OPTCGSim, DuelVoyager, Untap.in, TTS): volume, low stakes.
- **Targeted drills**: fixed-hand puzzles, "find the lethal", "best play from this board", forced-scenario starts.
- **Matchup testing**: structured testing vs top-N meta decks, record sheets, sideboard-free so focus on in-game choices/mulligans.
- **Playtest partners / team**: scrims with a fixed agenda.

### C. Learning from others
- **Guide reading**: deck guides (lines, matchups, mulligans, curves). Method: read -> goldfish the lines -> test -> re-read.
- **Pro VOD watching**: active watching (pause, predict the play, compare, note the reasoning). Distinct from passive viewing.
- **Own VOD review**: record games, tag decision points, find recurring leaks.
- **Coaching**: when it's worth it, how to get value (bring VODs + specific questions).
- **Community/Discord/Twitter/JP notes**: sources for tech, ban news, emerging lists; JP meta usually leads EN.

### D. Competitive reps
- **Ladder/ranked** (sim ladders, Limitless play, local leagues).
- **Locals -> Regionals -> Majors**: progression ladder, what to expect at each.
- **Tournament logistics**: deck registration, rules/judge calls, time management, slow-play, sleeve/card compliance, travel/food/sleep.
- **Round-by-round notes** and between-round resets.

### E. Thinking skills
- **Outcome prediction**: before each turn/attack, write what you expect and what the opponent holds; score yourself later.
- **Hand/range reading**: build the opponent's likely hand from curve, DON!! use, trash, life, leader.
- **Lines & planning**: plan 2 turns ahead, identify outs, "what beats me" analysis.
- **Risk assessment**: when to play around X vs go for it (probabilities, play-to-your-outs).
- **Probability fundamentals**: hypergeometric basics for trigger/counter odds, mulligan odds.
- **Decision journals** and **post-mortem taxonomy** (misplay / misread / bad matchup / variance / deck issue).

### F. Meta & deck
- **Meta analysis**: representation, conversion rates, matchup spreads, EN vs JP differences, ban/errata/release calendar impact.
- **Deck selection**: pick for skill fit, meta position, and what you can master in the time you have.
- **Deckbuilding & tech choices**: counter/trigger counts, card-by-card justification.
- **New-deck pipeline**: 1) read guides + top lists 2) goldfish curves 3) sim games vs 3 top matchups 4) review 5) lock list 6) ladder reps.
- **Set-release playbook**: first-week, first-month, post-ban reset behavior.

### G. Mental game (the "mental practice" bucket expanded)
- Tilt control, pre-game routine, visualization of lines, focus/time management, post-loss reset, confidence vs overconfidence, sleep/nutrition for events, growth mindset/process goals over results goals.

### H. Systems for improving
- **Deliberate practice loop**: Identify weakness -> targeted drill -> measure -> repeat.
- **Tracking**: win rate by matchup, play/draw, mulligan results, leak tally (simple log).
- **Goal setting** by level (see 4).
- **Weekly training template** by available hours.

## 3. Research plan (extensive, as requested)
Phases are parallelizable. Output of each phase is a structured data file (`/data/*.json|md`), not prose.

| Phase | Goal | Sources | Output |
|---|---|---|---|
| R1 Public landscape | Inventory resources by type and quality | onepiece.gg, Limitless, optcg.one, optcgsim Discord, YouTube channels (top EN/JP), Twitter/X, Reddit r/OPTCG, Bandai official rules/errata/event pages | `resources.json` (title, url, type, level, cost, language, last-checked, rating) |
| R2 Concept deepening | Verify each concept in section 2 with how-to + evidence from other TCG theory (MTG/Pokémon/Yu-Gi-Oh improvement writing; Flores/Jon Finkel-style process, Reid Duke "Level One") | Public articles, books/talks | `concepts/*.md` |
| R3 Meta data | How to source current meta, what "good" meta analysis looks like | Limitless, optcg.one, JP sites (Bandai events results, 大会結果 blogs, note.com) | method doc + data source list |
| R4 Paid-guide survey | Know *what exists* in Metafy/Patreon/Dojo: titles, authors, topics, level | Your Metafy/Dojo libraries | `paid-index.json` (**metadata + your own summary only**, see 6) |
| R5 JP sources | Find reliable JP note.com/Twitter authors, translate key concepts | note.com, Twitter/X, Japanese shop tournament reports | JP source list with translation workflow |
| R6 Competitor audit | Existing improvement sites/tools; what's missing | onepiece.gg, Dojo, Metafy hubs, Limitless | gap list that defines our differentiator |
| R7 Validation | 3-5 players (beginner/mid/competitive) walk through the prototype | Friends, Discord | friction list |

Note on what's actually findable: public search surfaced mostly Metafy guide titles (e.g., "Testing Like a Pirate", "Deckbuilding like a Pirate", "Road to Yonko"), onepiece.gg tier lists/beginner tips, and the sim tool landscape. Limitless/optcg.one data and JP sources still need direct visits.

## 4. Information architecture
- **Home**: 3 big entry cards (Improve / Learn a deck / Prep for event) + "20 minutes" button.
- **Skill diagnostic** (10-15 questions, client-side) -> radar of 8 skill areas -> recommended next 3 nodes.
- **Skill map**: the nodes from section 2, each tagged level (Beginner/Intermediate/Advanced/Pro), time, type.
- **Roadmaps**: Beginner -> Locals -> Regionals -> Major (what to do at each stage, checkpoints).
- **Deck Lab**: new-deck pipeline checklist + curated per-deck resource links (user-maintained list).
- **Event Prep**: countdown plan (T-30/14/7/2/day-of).
- **Drill library**: concrete printable/pastable drills.
- **Review tools**: VOD review template, decision-tag list, mistake taxonomy, match log (localStorage).
- **Resource library**: filterable by type/level/cost/language.
- **Tracker**: progress per node, saved in localStorage (no backend).

## 5. Tech approach (lazy-first, GitHub Pages)
- Static: plain HTML/CSS/JS or Astro/Vite (decide in design phase). No backend, no DB.
- Content in markdown/JSON, rendered at build time. Adding a resource = adding one JSON entry.
- State in localStorage. Optional export/import JSON.
- Deploy via GitHub Actions or just `/docs` folder.
- Accessible, mobile-first (people will use it at events).
- Meta data: link out to Limitless/optcg.one rather than scraping, unless a stable API is found.

## 6. Constraints and decisions I need to flag
1. **Credentials**: shared in chat, used once by a research agent to read the owner's own paid guides for private research (read-only). They are not stored in this repo. The raw digest lives in `research/private/` (gitignored); the site carries only summaries.
2. **Paid content is copyrighted**. The site must **link to and summarize in your own words**, never republish Metafy/Patreon/Dojo guide text/images. Keep `paid-index` to titles, authors, topic tags, and your own notes. This matters more because GitHub Pages is public.
3. **Third-party IP**: One Piece card art/logos are Bandai/Toei property. Use text only or minimal fair-use; add a fan-site disclaimer.
4. **Freshness**: meta data goes stale in weeks. Date-stamp everything and prefer linking to live sources.
5. Dojo/Metafy ToS: check automated access rules before any fetching.

## 7. Delivery phases
- **P0 (1-2 days)**: Answer open questions; pick stack; naming.
- **P1 (1 week)**: Research R1-R3, R6; concept docs drafted.
- **P2 (3-4 days)**: IA + wireframes + content schema.
- **P3 (1 week)**: MVP = Home, diagnostic, skill map, resource library, 20-min drill, tracker. Deploy.
- **P4 (ongoing)**: Deck Lab, Event Prep, roadmaps, JP sources, drill library.
- **P5**: user testing (R7), polish, SEO/OG cards, update cadence per set release.

## 8. MVP cut (if you want it small)
Home -> diagnostic -> 3 next steps -> resource library. Everything else later.

## 9. Decisions (answered 2026-11-05)
1. **Audience: just me.** No onboarding for strangers, no SEO. Optimize for a returning power user.
2. **Level: near-top** (top 64s, top 32s, one top 8, many semi-big wins). **Core problem = consistency.** De-emphasize beginner content; the diagnostic and home screen center on consistency leaks (fatigue, autopilot, tilt, prep gaps, deck drift).
3. **Stack: React** (Vite + React + TS), high polish. Deploy to GitHub Pages.
4. **Research: running now.** R1/R3/R6 -> `research/public-landscape.md`, R2 -> `research/concepts.md`, R4 -> `research/private/paid-guides-digest.md` (gitignored).
5. **Paid guides** (Metafy, onepiecedojo.gg) read with the user's login for private research only. Never republished; the site gets our own synthesis.
6. **English meta only** (EN/JP simultaneous). Current format: EB05, OP18 in a few weeks -> design a "set release playbook" flow for OP18.
7. **Card art**: `../optcg-scraper` (local card DB + images) and open-source DBs. Repo should be private, or exclude art from the public Pages build if the repo goes public.

## 10. Revised MVP (consistency-first)
1. **Home "Today"**: next session plan based on days-to-next-event + current focus leak.
2. **Match log + leak tracker**: fast post-game entry (matchup, play/draw, result, tagged mistakes); trends by leak type and fatigue (round number).
3. **Pre-turn checklist / between-round reset** cards (usable on phone at events).
4. **Deck Lab**: new-deck pipeline, aimed at OP18 release.
5. **Skill map + drill library** from `concepts.md`.
6. **Resource library** from `public-landscape.md`.
