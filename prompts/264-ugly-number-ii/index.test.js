import { describe, expect, test } from "bun:test";
import nthUglyNumber from './index';

const cases = [
  [10, 12],
  [1, 1],
];

describe("ugly-number-ii", () => {
  test.each(cases)("n=%i) should be %i", (a, expected) => {
    expect(nthUglyNumber(a)).toBe(expected);
  });
});
