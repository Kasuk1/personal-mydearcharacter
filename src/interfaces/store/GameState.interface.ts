import { ThunkMethodState } from './ThunkMethodState.interface';
export interface GameState {
  matches?: [Match];
  userMatches?: [Match];
  activeMatch?: Match;
  getMatchesState: ThunkMethodState;
  getMatchesByUserIdState: ThunkMethodState;
}

export interface Match {
  _id: string;
  player1: Player;
  player2?: Player;
  deckPlayer1?: [Card];
  deckPlayer2?: [Card];
  healthPlayer1: number;
  healthPlayer2: number;
  cardsSelected: [Card | null, Card | null];
  status: string;
  turns: number;
  winner: string;
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
