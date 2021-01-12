export class Tetris {
  readonly rows: number;
  readonly columns: number;
  public get Board() {
    return this.board;
  }

  private board: string[][];

  constructor(rows: number = 30, cols: number = 15) {
    this.rows = rows;
    this.columns = cols;

    this.board = Array.from(Array(this.rows), () =>
      new Array(this.columns).fill("")
    );
  }
}
