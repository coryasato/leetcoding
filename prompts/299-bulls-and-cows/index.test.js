import { describe, expect, test } from "bun:test";
import getHint from './index';

const cases = [
  ["1807", "7810", "1A3B"],
  ["1123", "0111", "1A1B"],
];

describe("bulls-and-cows", () => {
  test.each(cases)("(secret=%s, guess=%s) should be %s", (a, b, expected) => {
    expect(getHint(a, b)).toBe(expected);
  });
});
