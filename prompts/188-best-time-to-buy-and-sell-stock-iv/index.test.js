import { describe, expect, test } from "bun:test";
import maxProfit from './index';

const cases = [
  [2, [2,4,1], 2],
  [2, [3,2,6,5,0,3], 7],
];

describe("best-time-to-buy-and-sell-stock-iv", () => {
  test.each(cases)("k=%i, prices=%o) should be %i", (a, b, expected) => {
    expect(maxProfit(a, b)).toBe(expected);
  });
});
