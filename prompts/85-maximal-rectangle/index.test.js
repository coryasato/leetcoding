import { describe, expect, test } from "bun:test";
import maximalRectangle from './index';

const cases = [
  [[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]], 6],
  [[["0"]], 0],
  [[["1"]], 1],
  [[["1","0","1","0","0"],["1","1","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]], 10],
  [[["1","1","1","0","0"],["1","1","0","1","1"],["1","1","1","1","1"],["1","1","0","1","0"]], 8],  // Test if the Y axis logic is working.
  [[["1","0","0","0","0"],["1","0","0","0","0"],["1","1","1","1","1"],["1","0","0","0","0"]], 5],  // Test if the "xAxisCombo" logic is working.
  [[["0","0","0","0","0","0"],["0","0","0","0","0","0"],["1","1","0","1","1","1"],["1","0","0","0","0","0"],["0","0","0","0","0","0"]], 3],  // Test if the "xAxisCombo" logic is working for multi X combos.
];

describe("maximal-rectangle", () => {
  test.each(cases)("(matrix=%o) should be %i", (a, expected) => {
    expect(maximalRectangle(a)).toBe(expected);
  });
});
