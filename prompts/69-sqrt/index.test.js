import { describe, expect, test } from "bun:test";
import mySqrt from './index';

const cases = [
  [4, 2],
  [8, 2],
  [10987, Math.floor(Math.sqrt(10987))],
];

describe("sqrt", () => {
  test.each(cases)("(x=%i) should be %i", (a, expected) => {
    expect(mySqrt(a)).toBe(expected);
  });
});
