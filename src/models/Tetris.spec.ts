import { Tetris } from "./Tetris";

it("Tetris object is defined", () => {
  expect(Tetris).toBeDefined();
});

it("Can construct Tetris object without parameters", () => {
  expect(() => new Tetris()).not.toThrow();
});

it("Constructs a board with 30 rows and 15 columns by default", () => {
  const t = new Tetris();
  expect(t.columns).toEqual(15);
  expect(t.rows).toEqual(30);
  expect(t.Board).toBeDefined();
  expect(t.Board.length === t.columns);

  for (let i = 0; i < t.rows; i++) {
    expect(t.Board[i]).toBeDefined();
    expect(t.Board[i].length).toEqual(t.columns);
  }
});
