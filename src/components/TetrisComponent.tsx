import React from "react";
import BoardComponent from "./BoardComponent";
import { useTetris } from "../hooks/useTetris";

function TetrisComponent() {
  const tetris = useTetris();
  return (
    <div className="tetris">
      <h1 className="tetris__title">Tetris</h1>
      <BoardComponent tetris={tetris} />
    </div>
  );
}

export default TetrisComponent;
