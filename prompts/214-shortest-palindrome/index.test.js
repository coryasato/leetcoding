import { describe, expect, test } from "bun:test";
import shortestPalindrome from './index';

const cases = [
  ['aacecaaa', 'aaacecaaa'],
  ['abcd', 'dcbabcd'],
];

describe("shortest-palindrome", () => {
  test.each(cases)("(s=%s) should be %s", (a, expected) => {
    expect(shortestPalindrome(a)).toBe(expected);
  });
});
