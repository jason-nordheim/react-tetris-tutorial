import { ITetrisMove } from "../shared/interfaces";

export class TetrominoMove {
  public static get Down(): ITetrisMove {
    return { row: 1, column: 0 };
  }
  public static get Right(): ITetrisMove {
    return { row: 0, column: 1 };
  }
  public static get Left(): ITetrisMove {
    return { row: 0, column: -1 };
  }
}
