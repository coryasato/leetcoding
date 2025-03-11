import { describe, expect, test } from "bun:test";
import isNumber from './index';

const cases = [
  ["0", true],
  ["e", false],
  [".", false],
];

describe("valid-number", () => {
  test.each(cases)("(str=%s) should be %o", (a, expected) => {
    expect(isNumber(a)).toBe(expected);
  });

  test("All entries should be true", () => {
    const entries = ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"];
    expect(entries.every(isNumber)).toBe(true);
  });

  test("All entries should be false", () => {
    const entries = ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"];
    expect(entries.findIndex((entry) => isNumber(entry) === true)).toBe(-1);
  });
});
