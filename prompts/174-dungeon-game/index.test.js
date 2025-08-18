import { describe, expect, test } from "bun:test";
import calculateMinimumHP from './index';

const cases = [
  [[[-2,-3,3],[-5,-10,1],[10,30,-5]], 7],
  [[[0]], 1],
];

describe("dungeon-game", () => {
  test.each(cases)("dungeon=%o) should be %i", (a, expected) => {
    expect(calculateMinimumHP(a)).toBe(expected);
  });
});
