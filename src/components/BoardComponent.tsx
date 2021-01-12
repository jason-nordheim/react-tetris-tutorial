import React from "react";
import NodeComponent from "./NodeComponent";
import { ITetris } from "../shared/interfaces";

function BoardComponent(props: BoardComponentProps) {
  const { tetris } = props;
  return (
    <div className="board">
      {tetris.board.map((rows, r) => {
        return rows.map((n, c) => {
          return <NodeComponent key={`${r},${c}`} type={n} row={r} col={c} />;
        });
      })}
    </div>
  );
}

interface BoardComponentProps {
  tetris: ITetris;
}

export default BoardComponent;
