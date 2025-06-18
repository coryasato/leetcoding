import { describe, expect, test } from "bun:test";
import isPalindrome from './index';

const cases = [
  ['A man, a plan, a canal: Panama', true],
  ['race a car', false],
  [' ', true],
  ['a  b;?   d b:!   a', true],
  ['a  b;;c   d b:"   a', false],
];

describe("valid-palindrome", () => {
  test.each(cases)("s=%s) should be %p", (a, expected) => {
    expect(isPalindrome(a)).toBe(expected);
  });
});
