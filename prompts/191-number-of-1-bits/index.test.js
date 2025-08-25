import { describe, expect, test } from "bun:test";
import hammingWeight from './index';

const cases = [
  [11, 3],
  [128, 1],
  [2147483645, 30],
];

describe("number-of-1-bits", () => {
  test.each(cases)("n=%i) should be %i", (a, expected) => {
    expect(hammingWeight(a)).toBe(expected);
  });
});
