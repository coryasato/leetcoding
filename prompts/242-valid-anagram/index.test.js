import { describe, expect, test } from "bun:test";
import isAnagram from './index';

const cases = [
  ["anagram", "nagaram", true],
  ["rat", "car", false],
];

describe("valid-anagram", () => {
  test.each(cases)("s=%s, t=%s) should be %p", (a, b, expected) => {
    expect(isAnagram(a, b)).toBe(expected);
  });
});
