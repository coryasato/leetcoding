import { describe, expect, test } from "bun:test";
import myPow from './index';

const cases = [
  [2.00000, 10, 1024],
  [2.10000, 3, 9.261000000000001],  // Hello Javascript floats! :)
  [2.00000, -2, 0.25],
];

describe("pow-x-n", () => {
  test.each(cases)("(x=%i, n=%i) should be %i", (a, b, expected) => {
    expect(myPow(a, b)).toBe(expected);
  });
});
