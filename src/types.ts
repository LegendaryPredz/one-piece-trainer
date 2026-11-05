export type Game = {
  id: string
  at: number // epoch ms, orders games
  event: string
  round: number
  myDeck: string
  oppDeck: string
  turn: 'first' | 'second'
  result: 'W' | 'L'
  tags: string[]
  easy: boolean // opponent felt like an easy round going in
  note: string
}
