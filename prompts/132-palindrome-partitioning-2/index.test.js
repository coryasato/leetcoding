import { describe, expect, test } from "bun:test";
import minCut from './index';

const cases = [
  ['aab', 1],
  ['a', 0],
  ['ab', 1],
  ['aabbc', 2],
  ['abba', 0],
];

describe("palindrome-partitioning-2", () => {
  test.each(cases)("s=%s) should be %i", (a, expected) => {
    expect(minCut(a)).toBe(expected);
  });
});
