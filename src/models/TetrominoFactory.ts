import { Color } from "./Color";

export class TetrominoFactory {
  public static readonly ShapeIdentifiers: string[] = [
    "I",
    "J",
    "L",
    "O",
    "S",
    "Z",
    "T",
  ];
  /**
   * Gets the color associated with the shape identifier
   * @param shapeIdentifier
   */
  public static Color(shapeIdentifier: string): Color {
    switch (shapeIdentifier) {
      case "I":
        return new Color(80, 227, 230);
      case "J":
        return new Color(223, 173, 36);
      case "L":
        return new Color(36, 95, 223);
      case "O":
        return new Color(223, 217, 36);
      case "S":
        return new Color(48, 211, 56);
      case "Z":
        return new Color(132, 61, 190);
      case "T":
        return new Color(227, 78, 78);
      default:
        throw `Invalid Shape: \nAvailable Shapes: ['I','J','L','O', 'S', 'Z', 'T']`;
    }
  }
  /**
   * Creates a new Tetromino
   * @param shapeIdentifier
   */
  public static New(shapeIdentifier: string): string[][] {
    switch (shapeIdentifier) {
      case "I":
        return [
          ["", "I", "", ""],
          ["", "I", "", ""],
          ["", "I", "", ""],
          ["", "I", "", ""],
        ];
        break;
      case "J":
        return [
          ["", "J", ""],
          ["", "J", ""],
          ["", "J", ""],
        ];
        break;
      case "L":
        return [
          ["", "L", ""],
          ["", "L", ""],
          ["", "L", "L"],
        ];
      case "O":
        return [
          ["O", "O"],
          ["O", "O"],
        ];
      case "S":
        return [
          ["", "S", "S"],
          ["S", "S", ""],
          ["", "", ""],
        ];
      case "Z":
        return [
          ["Z", "Z", ""],
          ["", "Z", "Z"],
          ["", "", ""],
        ];
      case "T":
        return [
          ["T", "T", "T"],
          ["", "T", ""],
        ];
      default:
        throw `Invalid Shape: \nAvailable Shapes: ['I','J','L','O', 'S', 'Z', 'T']`;
    }
  }
}
