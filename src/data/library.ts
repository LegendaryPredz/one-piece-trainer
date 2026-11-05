// Own-words synthesis of what strong players' guides agree on, plus public links (research/public-landscape.md).
export const PRINCIPLES = [
  'Every action has a stated purpose. If you cannot say why, you are on autopilot.',
  'Decide each matchup and each turn whether you are racing or grinding. Do not take it from the deck\'s reputation.',
  'From about 10 DON, count the turns until each player dies. Play safe when ahead; take your risks two turns early when behind.',
  'Judge a decision by what you knew when you made it, not by how it turned out.',
  'Life is a resource. Every hit gives the opponent a card and maybe a trigger.',
  'Size attacks by what they cost the opponent. On lethal turns, attack in rising power order.',
  'Read their hand from counter choices, discards, cards held back and DON use.',
  'Build a standing board and attack together. Sending characters in early and alone is the most common mistake.',
  'Log games right after you play them, review later, and tag the repeats.',
  'Fix your play before your list. A tech card has to solve a named problem.',
]

export const LINKS: { group: string; items: { name: string; url: string; use: string }[] }[] = [
  { group: 'Data', items: [
    { name: 'Limitless Play', url: 'https://play.limitlesstcg.com/', use: 'Decklists, standings and pairings. Has a free JSON API.' },
    { name: 'optcg.one', url: 'https://optcg.one/', use: 'Decklist frequency and going first vs second.' },
    { name: 'onepiece.gg', url: 'https://onepiece.gg/', use: 'Tier lists, news, ban-list mirror, deck builder.' },
    { name: 'Bandai ban and restriction list', url: 'https://en.onepiece-cardgame.com/news/restriction.html', use: 'The only authoritative legality source.' },
    { name: 'Comprehensive rules (PDF)', url: 'https://en.onepiece-cardgame.com/pdf/rule_comprehensive.pdf', use: 'Settle rules and timing questions.' },
  ] },
  { group: 'Practice', items: [
    { name: 'OPTCGSim', url: 'https://optcgsim.com/', use: 'Volume and ladder. v1.44a already has EB05 and OP18 cards.' },
    { name: 'DuelVoyager', url: 'https://www.duelvoyager.com/', use: 'Browser play with match replays for review.' },
  ] },
  { group: 'Watch', items: [
    { name: 'Official EN channel', url: 'https://www.youtube.com/@ONEPIECECARDGAME', use: 'Regionals and Finals top-cut VODs.' },
    { name: 'Official JP channel', url: 'https://www.youtube.com/@onepiececardgame_official', use: 'JP championship archives.' },
    { name: 'Egman Events', url: 'https://www.twitch.tv/theegman', use: 'NA event coverage with commentary.' },
    { name: 'Yuyu-tei strategy blog (JP)', url: 'https://yuyu-tei.jp/show/opc', use: 'Deck write-ups by strong JP players. Translate in browser.' },
  ] },
]
