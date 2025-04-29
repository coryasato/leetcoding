import { describe, expect, test } from "bun:test";
import scrambleString from './index';

const cases = [
  ["great", "rgeat", true],
  ["abcde", "caebd", false],
  ["a", "a", true],
];

describe("scramble-string", () => {
  test.each(cases)("(s1=%s, s2=%s) should be %p", (a, b, expected) => {
    expect(scrambleString(a, b)).toBe(expected);
  });
});
