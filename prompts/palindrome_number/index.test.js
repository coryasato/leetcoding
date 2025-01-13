import { describe, expect, test } from "bun:test";
import isPalindrome from './index';

const cases = [
  [121, true],
  [-121, false],
  [10, false],
  [11, true],
  [4206996024, true],
  [116600, false],
];

describe("palindrome_number", () => {
  test.each(cases)("%p should contain values %p", (a, expected) => {
    expect(isPalindrome(a)).toBe(expected);
  });
});
