import { describe, expect, test } from "bun:test";
import maximalSquare from './index';

const cases = [
  [[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]], 4],
  [[["0","1"],["1","0"]], 1],
  [[["0"]], 0],
];

describe("maximal-square", () => {
  test.each(cases)("matrix=%o) should be %i", (a, expected) => {
    expect(maximalSquare(a)).toBe(expected);
  });
});
