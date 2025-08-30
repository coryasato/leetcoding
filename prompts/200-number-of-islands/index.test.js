import { describe, expect, test } from "bun:test";
import numIslands from './index';

const g1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
const g2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
const cases = [
  [g1, 1],
  [g2, 3],
];

describe("number-of-islands", () => {
  test.each(cases)("grid=%o) should be %i", (a, expected) => {
    expect(numIslands(a)).toBe(expected);
  });
});
