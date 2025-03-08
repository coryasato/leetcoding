import { describe, expect, test } from "bun:test";
import uniquePathsWithObstacles from './index';

const cases = [
  [[[0,0,0],[0,1,0],[0,0,0]], 2],
  [[[0,1],[0,0]], 1],
];

describe("unique-paths-2:uniquePathsWithObstacles", () => {
  test.each(cases)("(matrix=%o) should be %i", (a, expected) => {
    expect(uniquePathsWithObstacles(a)).toBe(expected);
  });``
});
