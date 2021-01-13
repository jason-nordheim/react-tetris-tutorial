import { useState, useEffect } from "react";
import { GameStatus } from "../shared/enums";
import { ITetris } from "../shared/interfaces";
import { useBoard } from "./useBoard";
import { useGameStatus } from "./useGameStatus";

export function useTetris(): ITetris {
  const [board] = useBoard(30, 15);
  const [status] = useGameStatus(board);

  // start the game
  useEffect(() => {
    return () => {};
  }, []);

  return { board, status };
}
