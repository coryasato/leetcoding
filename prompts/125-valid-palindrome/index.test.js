import { describe, expect, test } from "bun:test";
import isPalindrome from './index';

const cases = [
  ['A man, a plan, a canal: Panama', true],
  ['race a car', false],
  [' ', true],
];

describe("valid-palindrome", () => {
  test.each(cases)("s=%s) should be %p", (a, expected) => {
    expect(isPalindrome(a)).toBe(expected);
  });
});
