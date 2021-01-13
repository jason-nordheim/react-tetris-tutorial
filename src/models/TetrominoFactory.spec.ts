import { TetrominoFactory } from "./TetrominoFactory";

test("Tetromino Object defined", () => {
  expect(TetrominoFactory).toBeDefined();
  expect(TetrominoFactory.New).toBeDefined();
  expect(TetrominoFactory.Color).toBeDefined();
  expect(TetrominoFactory.ShapeIdentifiers).toBeDefined();
});
