import React from "react";
import BoardComponent from "./BoardComponent";
import { useTetris } from "../hooks/useTetris";
import ControlsComponent from "./ControlsComponent";

function TetrisComponent() {
  const tetris = useTetris();
  return (
    <div className="tetris">
      <h1 className="tetris__title">Tetris</h1>
      <div className="tetris__container">
        <BoardComponent tetris={tetris} />
        <ControlsComponent tetris={tetris} />
      </div>
    </div>
  );
}

export default TetrisComponent;
