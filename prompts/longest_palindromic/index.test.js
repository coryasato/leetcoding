import { describe, expect, test } from "bun:test";
import longestPalindrome from './index';

const cases = [
  ["babad", "bab"],
  ["cbbd", "bb"],
  ["adadeifiedboob", "deified"],
  ["assacivic12344321", "12344321"],
];

describe("longestPalindrome", () => {
  test.each(cases)("%p should contain values %p", (a, expected) => {
    expect(longestPalindrome(a)).toBe(expected);
  });
});
