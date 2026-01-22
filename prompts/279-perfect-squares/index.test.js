import { describe, expect, test } from "bun:test";
import numSquares from './index';

const cases = [
  [12, 3],
  [13, 2],
];

describe("perfect-squares", () => {
  test.each(cases)("n=%i) should be %i", (a, expected) => {
    expect(numSquares(a)).toBe(expected);
  });
});
