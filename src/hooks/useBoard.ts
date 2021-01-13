import { useEffect, useState } from "react";

export function useBoard(rows: number, cols: number) {
  const [board, setBoard] = useState(createBoard(rows, cols));

  useEffect(() => {
    return () => {};
  }, []);

  return [board];
}

function createBoard(rows: number, columns: number) {
  return Array.from(Array(rows), () => new Array(columns).fill(""));
}
