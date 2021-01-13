import { useState, useEffect } from "react";
import { GameStatus } from "../shared/enums";

export function useGameStatus(board: string[][]) {
  const [status, setStatus] = useState(GameStatus.new);

  useEffect(() => {
    // effect

    return () => {
      // cleanup
    };
  }, [board]);

  return [status];
}