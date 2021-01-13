import { ITetris } from "../shared/interfaces";
import { useBoard } from "./useBoard";
import { useGameStatus } from "./useGameStatus";

export function useTetris(): ITetris {
  const [board] = useBoard(22, 10);
  const [status] = useGameStatus(board);

  return { board, status };
}
