import { GameStatus } from "./enums";

export interface ITetris {
  board: string[][];
  status: GameStatus;
}

export interface ITetrisMove {
  row: number;
  column: number;
}
