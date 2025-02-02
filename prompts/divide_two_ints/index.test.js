import { describe, expect, test } from "bun:test";
import divideTwoInts from './index';

const cases = [
  [10, 3, 3],
  [7, -3, -2],
];

describe("divide_two_ints", () => {
  test.each(cases)("(dividend=%i, divisor=%i) should return %i", (a, b, expected) => {
    expect(divideTwoInts(a, b)).toBe(expected);
  });
});
