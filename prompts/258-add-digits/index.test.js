import { describe, expect, test } from "bun:test";
import addDigits from './index';

const cases = [
  [38, 2],
  [0, 0],
];

describe("add-digits", () => {
  test.each(cases)("num=%i) should be %i", (a, expected) => {
    expect(addDigits(a)).toBe(expected);
  });
});
