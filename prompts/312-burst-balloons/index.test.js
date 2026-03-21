import { describe, expect, test } from "bun:test";
import maxCoins from './index';

const cases = [
  [[3,1,5,8], 167],
  [[1,5], 10],
];

describe("burst-balloons", () => {
  test.each(cases)("(nums=%o) should be %i", (a, expected) => {
    expect(maxCoins(a)).toBe(expected);
  });
});
