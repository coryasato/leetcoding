import { describe, expect, test } from "bun:test";
import countDigitOne from './index';

const cases = [
  [13, 6],
  [0, 0],
  [111, 36],
];

describe("number-of-digit-one", () => {
  test.each(cases)("n=%i) should be %i", (a, expected) => {
    expect(countDigitOne(a)).toBe(expected);
  });
});
