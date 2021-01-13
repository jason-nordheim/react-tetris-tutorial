import React from "react";
import { ITetris } from "../shared/interfaces";

function ControlsComponent(props: ControlsComponentProps) {
  return (
    <div className="controls">
      <button className="controls__start">Start</button>
      <button className="controls__pause">Pause</button>
    </div>
  );
}

interface ControlsComponentProps {
  tetris: ITetris;
}

export default ControlsComponent;
