import { describe, expect, test } from "bun:test";
import climbStairs from './index';

const cases = [
  [2, 2],
  [3, 3],
  [4, 5],
  [6, 13],
];

describe("climb-stairs", () => {
  test.each(cases)("(n=%i) should be %i", (a, expected) => {
    expect(climbStairs(a)).toBe(expected);
  });
});
