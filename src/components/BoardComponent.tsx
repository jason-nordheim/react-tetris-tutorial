import React from "react";
import NodeComponent from "./NodeComponent";

function BoardComponent(props: BoardComponentProps) {
  const { gameBoard } = props;
  return (
    <div className="board">
      {gameBoard.map((rows, r) => {
        return rows.map((n, c) => {
          return <NodeComponent key={`${r},${c}`} type={n} row={r} col={c} />;
        });
      })}
    </div>
  );
}

interface BoardComponentProps {
  gameBoard: Array<Array<string>>;
}

export default BoardComponent;
