import { describe, expect, test } from "bun:test";
import nthSuperUglyNumber from './index';

const cases = [
  [12, [2,7,13,19], 32],
  [1, [2,3,5], 1],
];

describe("super-ugly-number", () => {
  test.each(cases)("(n=%i, primes=%o) should be %i", (a, b, expected) => {
    expect(nthSuperUglyNumber(a, b)).toBe(expected);
  });
});
