import { describe, expect, test } from "bun:test";
import minPathSum from './index';

const cases = [
  [[[1,3,1],[1,5,1],[4,2,1]], 7],
  [[[1,2,3],[4,5,6]], 12],
];

describe("minimum-path-sum", () => {
  test.each(cases)("(matrix=%o) should be %i", (a, expected) => {
    expect(minPathSum(a)).toBe(expected);
  });
});
