import { useEffect, useState } from "react";

export function useBoard(rows: number, cols: number) {
  const [board, setBoard] = useState(createBoard(rows, cols));

  useEffect(() => {
    return () => {};
  }, []);

  return [board];
}

function newTetromino(board: string[][], tetromino: string[][]) {
  const offset = Math.floor(board.length / 2);
  // check if we can place on board
  for (let row = tetromino.length; row > -1; row--) {
    for (let column = tetromino[row].length; row > -1; column--) {
      if (tetromino[row][column] === "") {
        // tetromino grid isn't a real space
        continue;
      } else if (board[row + offset][column] === "") {
        // space is available
        
      }
    }
  }
}

function createBoard(rows: number, columns: number) {
  return Array.from(Array(rows), () => new Array(columns).fill(""));
}

// for (let row = 0; row < tetromino.length; row++) {
//   for (let column = 0; column < tetromino[row].length; column++) {
//     if (tetromino[row][column] === "") {
//       // tetromino grid space is empty
//       continue;
//     } else if (board[row][column] === "") {
//       // available
//     } else {
//       // occupied
//     }
//   }
// }
