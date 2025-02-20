import { describe, expect, test } from "bun:test";
import jump from './index';

const cases = [
  [[2,3,1,1,4], 2],
  [[2,3,0,1,4], 2],
  [[4,4,2,1,1,1,3,4,0], 3],
  [[2,0,1,1,1,1,1], 5],
  [[2,0,1,1,1,1,1,0,1], 7],
];

describe("jump-game-2", () => {
  test.each(cases)("(nums=%o) should be %i", (a, expected) => {
    expect(jump(a)).toEqual(expected);
  });
});
