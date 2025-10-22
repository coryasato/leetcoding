import { describe, expect, test } from "bun:test";
import isPalindrome from './index';

const cases = [
  [[1,2,2,1], true],
  [[1,2], false],
];

describe("palindrome-linked-list", () => {
  test.each(cases)("arr=%o) should be %p", (a, expected) => {
    expect(isPalindrome(a)).toBe(expected);
  });
});
