import { useState } from "react";

const newBoard = (rows: number, cols: number) => {
  return Array.from(Array(rows), () => new Array(cols).fill(""));
};

export function useTetris() {
  const [board, setBoard] = useState(newBoard(30, 15));

  return [board];
}
