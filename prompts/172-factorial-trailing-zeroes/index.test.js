import { describe, expect, test } from "bun:test";
import trailingZeroes from './index';

const cases = [
  [3, 0],
  [5, 1],
  [0, 0],
];

describe("factorial-trailing-zeroes", () => {
  test.each(cases)("n=%i) should equal %i", (a, expected) => {
    expect(trailingZeroes(a)).toEqual(expected);
  });
});
