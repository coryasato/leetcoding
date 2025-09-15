import { describe, expect, test } from "bun:test";
import countPrimes from './index';

const cases = [
  [10, 4],
  [0, 0],
  [1, 0],
];

describe("count-primes", () => {
  test.each(cases)("n=%i) should be %i", (a, expected) => {
    expect(countPrimes(a)).toBe(expected);
  });
});
