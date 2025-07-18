import { describe, expect, test } from "bun:test";
import maxProfit from './index';

const cases = [
  [[7,1,5,3,6,4], 7],
  [[1,2,3,4,5], 4],
  [[7,6,4,3,1], 0],
];

describe("best-time-to-buy-and-sell-stock-2", () => {
  test.each(cases)("prices=%o) should be %i", (a, expected) => {
    expect(maxProfit(a)).toBe(expected);
  });
});
