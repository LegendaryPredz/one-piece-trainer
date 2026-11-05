# OPTCG Public Landscape: Meta, Practice, Content, Data

Last checked: **2026-11-05** (all items unless noted). Format: **EB05** (EB05 released 2026-10-30 EN / 2026-10-31 JP). OP18 release: **2026-11-20** (it is the official "4th Anniversary Event (OP-18 Release Event)", Nov 20 to Dec 17).

Ratings: **A** = primary, reliable, current. **B** = useful but with caveats (stale, thin, paywalled, unverified). **C** = marginal, unverified, or beginner-level.

Confidence tags: `[verified]` = fetched or probed today. `[unverified]` = from search snippets or prior knowledge, not confirmed today.

---

## 1. Meta data sources

### 1.1 Source table

| Source | URL | Offers | Freshness | API / JSON | Rating | Use it for |
|---|---|---|---|---|---|---|
| **Limitless Play (online events)** | https://play.limitlesstcg.com/decks?game=OP | Decklists for every player, standings, round-by-round pairings, leader share and win %, per-leader matchup pages (`/decks/<LEADER-ID>/matchups?game=OP`) | Live. Events from 2026-11-04 already in API | **Yes, public JSON, no key** (see 1.2) `[verified]` | **A** | The raw feed. Build your own EB05 share, win-rate, and matchup tables from it |
| Limitless main (paper majors) | https://onepiece.limitlesstcg.com/decks , /tournaments | Regionals and Treasure Cup top cuts, decklists, share by points | **Stale.** Newest event listed is 2026-07-26 (OP16). Format codes stop at OP16. No OP17 or EB05 events | No documented API for this site | **B** | Historical paper Regionals lists. Do not rely on it for the current meta |
| Limitless play web filters | same | Set filter stops at **OP16**. OP17 and EB05 events are lumped into the "OP16" bucket | n/a | n/a | n/a | Caveat: the web UI cannot isolate EB05. Use the API and filter by date |
| **optcg.one** | https://www.optcg.one/meta , /articles | Card DB (~3,142 cards), 4,900+ tournament decklists, leader tiers S–D, win rates "corrected for sample size" on 50k+ ranked-sim matches, 1st/2nd toggles | Matches include EB05 leaders (Nico Robin EB05-010). No timestamp on the page. Newest article dated 2026-06-04 | No public API found (no `/api` or `__NEXT_DATA__`) | **B** | Going-first vs going-second splits, and a second opinion on sim ladder win rates |
| **onepiecedb.io** | https://onepiecedb.io/format/eb05 | EB05 format page (Oct 30 to present), composite "Score" mixing community decks, views, and official Top 8s. Card usage % | Updated within days | None found | **B** | Fast early-format snapshot and EB05 card-usage %. The score is opaque, so don't use it for win rates |
| onepiece.gg | https://onepiece.gg/ , /meta/ , /banned-and-restricted-cards/ | News, set and product pages, tier lists, historical "Ranked OPTCG Meta Report" ladder posts, ban-list mirror, deck builder, playtest | News current (2026-11-01). Meta page is JS behind an adblock wall, with no visible date | No | **B** | News and set-reveal tracking, ban-list mirror, and older ranked ladder reports |
| One Piece Top Decks | https://onepiecetopdecks.com/ | Decklists, deck reviews, leaks (OP18 and EB05 leaks posted 2026-08-23) | Last deck review 2026-09-27 (post-Mihawk-ban OP17) | No | **C** | Early leaks and spoilers before Bandai reveals. Weak for meta data |
| opmetagame.com | https://opmetagame.com/decks/ | Tier list and win rate/"POP" per deck. Claims to update every 6h from "live tournament data" (source not named) | Still shows the OP-17 / pre-ban picture (Mihawk S-tier) | No | **C** | Avoid. It looks stale and does not name its sources |
| gumgum.gg | https://gumgum.gg/ | Meta decklists, card DB, events, market watch | Unclear | No | **C** | Secondary decklist browsing |
| OPlayTCG meta stats | https://oplaytcg.com/en/meta-stats | Simulator win rates (search snippet: Luffy 55.6% over 62k games) | Unknown. Returned 403 to the fetch | Unknown | **C** `[unverified]` | Another sim win-rate sample, if you can reach it |
| **Bandai EN ban/restriction page** | https://en.onepiece-cardgame.com/news/restriction.html | Official banned, restricted, and banned-pair lists, plus links to earlier revisions | Latest revision effective 2026-10-12 | No | **A** | The only authoritative legality source |
| Bandai EN events | https://en.onepiece-cardgame.com/events/ | Event calendar and regulations. **No results or decklists** | Current | No | **B** | Planning around events (OP18 release event, Regionals S2, Finals Jan 2027) |
| Bandai JP featured decks | https://www.onepiece-cardgame.com/feature/deck/ | Official "recommended deck" intros (newest 2026-10-30, GY Nico Robin). Not tournament results | Current | No | **C** | Seeing which leaders Bandai is pushing. Not competitive data |
| Bandai official YouTube / Twitch | https://www.twitch.tv/onepiececardgamecentral | Regionals top-cut and Finals streams, EN and JP CS archives | Event-driven | No | **A** for VODs | High-level VODs (see section 3) |

### 1.2 Limitless Play API (the key finding) `[verified]`

- Docs: https://docs.limitlesstcg.com/developer.html. No key is needed for tournament endpoints. Rate-limited, with limits shown in response headers. A key (apply on the docs page) raises the limits.
- Working endpoints for One Piece (tested 2026-11-05):
  - `GET https://play.limitlesstcg.com/api/tournaments?game=OP&limit=500` returns id, name, date, format (`null` = standard, `EXTRA` = Extra Grand Battle), and players
  - `GET .../api/tournaments/{id}/standings` returns each player's full decklist (leader, characters, events, stages with set and number), `deck.id` (leader card ID), and W/L/T record
  - `GET .../api/tournaments/{id}/pairings` returns round, table, both players, winner, and per-game winners
- Standings plus pairings let you compute **full matchup spreads** for any date window. That works around the web UI's missing EB05 filter.
- Not in the data: who went first, die rolls, and game length. Those must come from personal logs.
- Caveats: names are inconsistent (bracket tags like `[EB05]`, `[EB05+EGB]`), so filter by date and exclude `format == "EXTRA"`. Online events skew toward EU (ChinoizeCup ~50–130 players, run 3x per week).

### 1.3 Current EB05 meta snapshot

**Snapshot A: computed from the Limitless API (online events since 2026-10-19, ≥16 players, standard only).** 15 events, 696 entries. Script: `/private/tmp/claude-501/-Users-ohitslegend-Dev-OnePieceTrainer/d4f6682c-8b67-40e2-9263-511dc8d9d70a/scratchpad/agg.py`. Small sample, so treat it as directional.

| # | Leader (ID) | Share | Match win % | Record |
|---|---|---|---|---|
| 1 | Rocks.D.Xebec (OP17-039), Blue | 15.2% | 49.7% | 235-230-8 |
| 2 | Monkey.D.Luffy (OP13-001) | 11.1% | **58.4%** | 205-143-3 |
| – | (no decklist submitted) | 9.8% | 50.9% | |
| 3 | Enel (OP05-098), Purple | 6.2% | 54.9% | 117-93-3 |
| 4 | Sabo (OP13-004) | 5.7% | 47.8% | 88-95-1 |
| 5 | Luffy & Ace (ST30-001), Red/Green | 5.6% | 48.9% | 91-94-1 |
| 6 | Buggy (OP09-042) | 5.2% | 53.8% | 93-80-0 |
| 7 | Donquixote Rosinante (OP12-061), Purple/Yellow | 4.2% | 50.0% | 69-69-0 |
| 8 | Kaido (OP17-058), Purple | 3.9% | 44.3% | 51-64-0 |
| 9 | Boa Hancock (OP14-041) | 2.7% | 50.0% | |
| 10 | Monkey.D.Luffy (OP17-079), Black | 2.7% | 46.8% | |
| 11 | Shirahoshi (OP11-022) | 2.4% | 53.1% | |
| 12 | Nico Robin (EB05-010), Green/Yellow | 2.3% | 53.6% | |

**Snapshot B: optcg.one ranked-sim (no date shown, both seats combined).** Luffy OP13-001 56.0% (9,471 matches), Buggy OP09-042 55.8%, Rocks OP17-039 53.2%, Linlin OP17-099 52.1%, Nico Robin EB05-010 52.0%, Nico Robin OP09-062 51.8%, Enel OP05-098 51.2%, Kaido OP17-058 49.6%.

**Snapshot C: onepiecedb.io EB05 page (composite score).** 1. GY Nico Robin (EB05), 2. Yellow Enel, 3. PY Rosinante.

**Consensus read:** Rocks (most played, about 50%) and OP13 Luffy (best performer) lead, followed by Enel, Buggy, Sabo, Luffy & Ace, and Rosinante. The new GY Nico Robin (EB05-010) is the breakout EB05 leader, with good early results on a small sample. Green Mihawk dropped out after the 2026-10-12 ban. Expect a reshuffle on 2026-11-20 with OP18.

### 1.4 Ban list (official, effective 2026-10-12) `[verified]`

Source: https://en.onepiece-cardgame.com/news/restriction.html (last checked 2026-11-05).

| Type | Card(s) | Dates |
|---|---|---|
| Banned (newest) | **OP14-020 Dracule Mihawk** (parallels included) | Announced 2026-09-24, effective **2026-10-12** |
| Banned | OP06-047 Charlotte Pudding | Effective 2026-04-01 (per secondary sources) |
| Banned | OP03-040 Nami, OP06-086 Gecko Moria, ST10-001 Trafalgar Law, OP06-116 Reject | Older. Dates not shown on the current page |
| Banned pair | OP07-115 I Re-Quasar Helllp!! + EB04-058 Borsalino | Effective 2026-04-10 per the official revision page (one retailer says 2026-05-01) |
| Banned pair | OP11-040 Monkey.D.Luffy + OP11-067 Charlotte Katakuri | Older |
| Banned pair | OP11-040 Monkey.D.Luffy + OP08-069 Charlotte Linlin | Older |
| Restricted (1-of) | None | – |

Earlier revisions are linked from the official page: 2026-04-10 (https://en.onepiece-cardgame.com/news/restriction-260501.html), 2026-04-01, and 2025-08-30. The 2026-04 update also **rotated OP01–OP04 out of Standard** and unbanned several Block 1 cards `[unverified detail, from secondary sources]`.

---

## 2. Practice tools

| Tool | URL | Good for | Logging / replays | Rating | Use it for |
|---|---|---|---|---|---|
| **OPTCGSim** | https://optcgsim.com/ | Volume. The de facto community client (Windows, Mac, Linux, Android, iOS sideload). v1.44a (2026-10-07) added 87 EB05 and OP18 cards, so OP18 previews can be tested pre-release | Has a ranked ladder (sim data powers optcg.one and onepiece.gg ladder reports). Replay and log features are listed only as keywords on the page `[partly unverified]` | **A** | Daily reps, and scheduled matchup sets with a testing partner. Pre-release OP18 testing |
| **DuelVoyager** | https://www.duelvoyager.com/ | Browser-based, no install. Deck builder, testing, ranked, tournaments, **match replays**, shareable deck links | Replays per its own metadata. No independent reviews found | **B** `[unverified depth]` | Quick sessions on any machine, and replay-based self-review |
| Untap.in | https://untap.in/ | Generic browser card-game table that supports OPTCG (site is up). Manual rules enforcement | Minimal | **C** `[unverified]` | Testing unreleased cards or custom lists the sims don't support yet |
| Tabletop Simulator | https://store.steampowered.com/app/286160/ (OPTCG Workshop mods) | Fully manual 3D tabletop | None | **C** `[unverified]` | Rarely worth it now that OPTCGSim exists |
| Bandai "ONE PIECE CARDGAME Teaching" app | https://apps.apple.com/us/app/-/id1631528594 | Tutorial and free-battle vs AI | None | **C** | Foundational rules reference only. Skip for training |
| Bandai TCG+ app | (Bandai Card Games app) | Event registration, store locator | Official event history `[unverified]` | **B** | Finding and entering official events |
| **Limitless Play online events** (ChinoizeCup Mon/Tue/Wed, Rumble League, Win-a-Box) | https://play.limitlesstcg.com/tournaments?game=OP | Competitive Swiss reps against tryhards, with decklists and pairings published | Every event leaves a public record (your pairings, opponents' lists) | **A** | Tournament-condition practice 3x per week. Pull your own match history from the API |
| Discord leagues / team servers | (Egman Events, ChinoizeCup, regional team servers) | Structured weekly leagues, testing partners | Varies | **B** `[unverified specifics]` | Finding regular testing partners for specific matchups |
| Limitless Swiss calculator | linked from https://onepiece.limitlesstcg.com/ | X-2 / ID math for top-cut planning | n/a | **B** | In-event decisions about intentional draws |

Training fit summary: **volume** comes from OPTCGSim ranked. **Specific matchups** come from scheduled OPTCGSim private games with a partner. **Replays** come from DuelVoyager, or from screen recordings of OPTCGSim. **Logging** has no good OPTCG-specific tool (see section 5).

---

## 3. Content creators

The creator landscape is thinly documented online. Names below were confirmed through listings or team pages. Quality ratings reflect stated focus, not audited watch time.

| Creator / channel | URL | Platform | Best for | Rating |
|---|---|---|---|---|
| Official ONE PIECE Card Game Channel (EN) | https://www.youtube.com/@ONEPIECECARDGAME (~103K subs) | YouTube | Regionals and Finals VODs. Top-cut gameplay with commentary | **A** |
| OnePieceCardGameCentral (Bandai EU) | https://www.twitch.tv/onepiececardgamecentral | Twitch | Live EU Regionals Top 32 coverage | **A** |
| 【公式】ONE PIECEカードゲーム チャンネル (JP) | https://www.youtube.com/@onepiececardgame_official (see https://yutura.net/channel/66004/) | YouTube | **JP CS / World Finals archives** (e.g. 25-26 World Final, 26-27 S1 3on3), plus "ワンピカード情報局" new-leader showcase matches. Board states are readable without Japanese | **A** |
| Egman Events (Hayden "TheEgman" Kaustinen; commentators incl. Sebastian "Risu" Acosta) | https://egmanevents.com/team , https://www.twitch.tv/theegman | Twitch / YouTube | NA event coverage and commentary of high-level play | **A-** |
| Yonas Abraham (Egman team) | https://egmanevents.com/team | Coaching | 2023 NA champion, multi-regional finisher. Offers paid coaching | **B** |
| TeamSeafoodKing (SG team) | https://metafy.gg/guides/view/how-top-players-won-and-lost-regional-stre-CuVajpGQCjL | Metafy | Paid regional-stream breakdowns ("how top players won and lost"). This is the VOD-review format you want, but it is paywalled and dated (2025-04) | **B** |
| Stage Zero | https://www.youtube.com/channel/UCF3ZtnxDX… (~9.4K, via Feedspot) | YouTube | Deck profiles, breakdowns, analysis. Hosts online tournaments | **B** |
| Vampyr Gaming | (~12.6K, via Feedspot) | YouTube | Competitive journey and gameplay | **B** |
| Hibiki OPCG | (~4.5K) | YouTube | Gameplay, guides, tournament footage | **B** |
| Soul King Crew TCG | (small) | YouTube | Deck testing, tournament replays | **C** |
| Shadow Snatch TCG | (small) | YouTube | VOD replays and tournament experiences | **C** |
| Yuyu-tei OPC strategy blog (JP writers ぐでたま, じょーじ, ガチャ) | https://yuyu-tei.jp/show/opc | Web (JP) | Current JP deck intros by strong players: GY Robin (10-30), PY Robin (10-16), RG Luffy & Ace (10-13), Kaido, Linlin. Card lists and mulligan notes translate well via browser translation | **A-** |

Full channel directory: https://videos.feedspot.com/one_piece_tcg_youtube_channels/ (35 channels, mostly casual). Last checked 2026-11-05.

**Gap:** I could not verify specific X/Twitter accounts or individual JP pro YouTubers through public search today. Before adding handles, ask the user for the players they already follow, or mine the Limitless and official top-cut player names and their linked socials.

---

## 4. Improvement articles (mindset, testing, VOD review, consistency)

There is very little advanced written material. Most of what exists is intermediate.

| Article | URL | Date | Rating | Use it for |
|---|---|---|---|---|
| "The numbers behind better One Piece decisions" (onepiece.gg, razviar) | https://onepiece.gg/the-numbers-behind-better-one-piece-decisions/ | 2026-08-17 | **B** | Reading win-rate data correctly (overall vs matchup-specific). Hypergeometric basics: 4-of in opening 5 = 35.3%, 3-of = 27.6% |
| "How to test a One Piece TCG deck properly" (Bounty) | https://www.bountytcg.app/en/blog | 2026-08-23 | **B** | Testing protocol: 20 opening hands for keep-rate (<60% broken, 60–75% normal), goldfish, then matchups. Don't change cards after a single loss. Change 1–3 cards per session |
| "How to read the OPTCG meta without being misled" (Bounty) | same | 2026-08-20 | **B** | Sample-size skepticism about tier lists |
| Bounty: mulligan, counter step, attack-leader-vs-character | same | 2026-08 | **C** | Foundational references only |
| "Preparing for high-stakes One Piece TCG events" (onepiece.gg) | https://onepiece.gg/preparing-for-high-stakes-one-piece-tcg-events/ | n/d | **C** | Lock the list about 2 weeks out, logistics checklist |
| Metafy OPTCG guides (paid) | https://metafy.gg/guides/view/how-top-players-won-and-lost-regional-stre-CuVajpGQCjL | 2025-04-29 | **B** | Stream-based decision breakdowns. The only VOD-review-style product found |
| Yuyu-tei JP deck intros | https://yuyu-tei.jp/show/opc | rolling | **A-** | High-level JP deck logic and mulligan guidance |

**Nothing public covers OPTCG-specific consistency or tilt management for advanced players.** Borrow from MTG and Pokémon (e.g. Frank Karsten's hypergeometric articles, and "play log / mistake log" methods), and adapt them.

---

## 5. Competitor audit: existing OPTCG improvement or training hubs

| Hub | Does well | Missing |
|---|---|---|
| Limitless (play + main) | Gold-standard raw data, public API, per-leader matchups | Main site stale since Jul 2026. Web UI can't isolate EB05. No personal analytics, no 1st/2nd split, no training layer |
| optcg.one | Sample-size-corrected win rates, 1st/2nd toggle, articles | No dates, no API, matchup matrix not visible, no personal tracking |
| onepiece.gg / onepiecedb.io / opmetagame / gumgum | Breadth: news, DB, decks, tier lists | Opaque scoring, adblock walls, stale tiers, nothing on player improvement |
| Metafy (coaches, paid guides) | Real top players, VOD breakdowns | Paywalled, sparse, dated, not tied to your own games |
| Egman Events | Coverage and coaching | Coaching is 1:1 and doesn't scale. No tools |
| TCG Tournament Tracker (iOS) https://apps.apple.com/app/id6758927288 | Multi-TCG match log, 1st/2nd win rate, die-roll luck | Generic. No OPTCG leader DB, no matchup matrix, no meta comparison `[unverified depth]` |
| Bounty, Log Pose, OneCollector | Collection and prices | Not about play |

**Verdict:** there is no dedicated OPTCG performance-training hub. Data sites describe the meta. Nothing connects **your** results to **the** meta, or gives you structured drills, mistake logs, or consistency tracking.

---

## 6. Open-source card databases and APIs

| Resource | URL | Data | Auth / freshness | Rating | Use it for |
|---|---|---|---|---|---|
| **optcgapi.com** | https://optcgapi.com/ , e.g. `GET /api/allSetCards/` | 3,743 cards. Fields: name, text, type, color, cost, power, counter, attribute, subtypes, life, rarity, `card_image` URL, TCGplayer market price, `date_scraped` | **No key** `[verified]`. Covers through **OP-17**. **No EB05 yet** | **A-** | Zero-friction card JSON and images for the React site. Patch EB05 and OP18 from another source |
| **arjunkai/optcg-api** | https://github.com/arjunkai/optcg-api (live: https://optcg-api.arjunbansal-ai.workers.dev/docs) | 4,500+ cards across 50+ sets, DON, prices and price history, `/cards/index` slim sync, **public CORS image proxy** `/images/{card_id}` | Data endpoints need a requested key. Image proxy is open. Updated 2026-11-03 | **A** | Image hosting with CORS. Full sync if you request a key |
| **coko7/vegapull** | https://github.com/coko7/vegapull (42★, updated 2026-10-24) | Rust CLI that scrapes packs, cards, and images from the official Bandai card list | Self-run, so you control freshness | **A** | Pulling EB05 and OP18 data the day Bandai posts it |
| timothy22000/optcg-cards | https://github.com/timothy22000/optcg-cards | Dataset from vegapull (+ HF embeddings) | Static snapshots | **B** | Offline JSON seed |
| lorenzozulli/optcg_leaders_list | https://github.com/lorenzozulli/optcg_leaders_list | JSON of all leaders | Updated 2026-07 (pre-EB05) | **C** | Leader picklist seed |
| gregario/onepiece-oracle | https://github.com/gregario/onepiece-oracle | MCP server: card search, deck analysis | 2026-07 | **C** | Dev-time card lookups |
| BAA-Studios/MOOgiwara | https://github.com/BAA-Studios/MOOgiwara (47★) | Open-source browser OPTCG simulator | Updated 2026-10 | **C** | Reference only |
| Official card list | https://en.onepiece-cardgame.com/cardlist/ | Canonical text and images | Same-day | **A** (source of truth) | Errata checks. vegapull scrapes this |
| Limitless Play API | see 1.2 | Decklists with set and number | Live | **A** | Linking decklists to card data by `set`+`number` |

Licensing: card art and text belong to Eiichiro Oda/Shueisha, Toei, and Bandai. Fine for a personal site, but don't redistribute in bulk.

---

## Gaps and opportunities for the training site

1. **Personal match log with an OPTCG-native schema.** Fields: leader vs leader, **first/second**, die roll, event tier, result, game length, mulligan (Y/N), and a loss-cause tag (draw-dependent / misplay / sequencing / DON math / counter math / misread). Nobody offers this. It is the core tool for a consistency problem.
2. **Your results vs the field.** Pull EB05 matchup win rates from the Limitless API (standings + pairings) and show your matchup win % against the field baseline, with confidence intervals. Flag matchups where you underperform the field. That is the consistency leak.
3. **Proper date-window filtering.** Limitless's UI is stuck on "OP16". Your own aggregator (prototype: `agg.py` above) can slice EB05-only, then OP18-only from 2026-11-20.
4. **1st/2nd split per matchup.** No public source combines turn order with matchups. Only personal logs can supply it.
5. **Mistake journal and VOD review workflow.** Timestamped notes on replays (DuelVoyager or recorded OPTCGSim), recurring-error tagging, and weekly review of the top 3 error types. No public tool exists.
6. **Pre-event checklist and list freeze.** Lock the list about 2 weeks out, sideboard-free so matchup plans become card-choice notes, plus Swiss math (Limitless calculator).
7. **Opening-hand / keep-rate trainer.** Hypergeometric keep-rate and mulligan quizzes per deck, using card JSON from optcgapi or vegapull. Turns the Bounty "20 hands" heuristic into a drill.
8. **Format-change prep for OP18 (2026-11-20).** OPTCGSim already has 87 EB05/OP18 cards. A "new set" page could track early lists from Limitless and Yuyu-tei as they appear.
9. **Curated VOD library.** Official EN, EU, and JP CS archives indexed by matchup and turn, since nobody indexes top-cut footage by matchup.
10. **Ban and legality watcher.** Diff the official restriction page on each load and alert. Announcements come about 18 days before they take effect (Mihawk: 09-24 announced, 10-12 effective).
