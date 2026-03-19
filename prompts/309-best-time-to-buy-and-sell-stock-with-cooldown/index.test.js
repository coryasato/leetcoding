import { describe, expect, test } from "bun:test";
import maxProfit from './index';

const cases = [
  [[1,2,3,0,2], 3],
  [[1], 0],
];

describe("best-time-to-buy-and-sell-stock-with-cooldown", () => {
  test.each(cases)("(prices=%o) should be %i", (a, expected) => {
    expect(maxProfit(a)).toBe(expected);
  });
});
