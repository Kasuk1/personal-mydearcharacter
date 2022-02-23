import { ThunkMethodState } from './ThunkMethodState.interface';
export interface GameState {
  matches?: [Match];
  activeMatch?: Match;
  getMatchesState: ThunkMethodState;
}

export interface Match {
  _id: string;
  player1: Player;
  player2?: Player;
  deckPlayer1?: [Card];
  deckPlayer2?: [Card];
  healthPlayer1: number;
  healthPlayer2: number;
  status: string;
  turns: number;
}

export interface Player {
  uid: string;
  nickname: string;
  email: string;
  level: number;
  online: boolean;
}
export interface Card {
  _id: string;
  anime: string;
  name: string;
  image: string;
  level: number;
  power: number;
  health: number;
}
