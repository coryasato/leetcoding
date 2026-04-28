import { describe, expect, test } from "bun:test";
import coinChange from './index';

const cases = [
  [[1,2,5], 11, 3],
  [[2], 3, -1],
  [[1], 0, 0],
];

describe("coin-change", () => {
  test.each(cases)("(coins=%o, amount=%i) should be %i", (a, b, expected) => {
    expect(coinChange(a, b)).toBe(expected);
  });
});
