import { ThunkMethodState } from './ThunkMethodState.interface';
export interface GameState {
  matches?: [Match];
  activeMatch?: Match;
  getMatchesState: ThunkMethodState;
}

export interface Match {
  _id: string;
  player1: String;
  player2?: String;
  playerDeck1?: [Card];
  playerDeck2?: [Card];
  status: String;
  turns: Number;
}

export interface Card {
  anime: String;
  name: String;
  image: String;
  level: Number;
  power: Number;
  health: Number;
}
