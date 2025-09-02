import { describe, expect, test } from "bun:test";
import rangeBitwiseAnd from './index';

const cases = [
  [5, 7, 4],
  [0, 0, 0],
  [1, 2147483647, 0],
];

describe("bitwise-and-of-numbers-range", () => {
  test.each(cases)("left=%i, right=%i) should be %i", (a, b, expected) => {
    expect(rangeBitwiseAnd(a, b)).toBe(expected);
  });
});
