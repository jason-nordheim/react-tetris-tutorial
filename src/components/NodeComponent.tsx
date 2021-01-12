import React from "react";

function NodeComponent(props: NodeComponentProps) {
  const { type, row, col } = props;
  const style = { gridRow: row + 1, gridColumn: col + 1 };
  const classes = type === "" ? "node empty" : `node ${type}`;
  return <div className={classes} style={style}></div>;
}

interface NodeComponentProps {
  type: string;
  row: number;
  col: number;
}

export default NodeComponent;
