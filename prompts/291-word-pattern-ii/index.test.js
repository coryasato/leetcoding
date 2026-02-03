import { describe, expect, test } from "bun:test";
import wordPattern from './index';

const cases = [
  ["abab", "redblueredblue", true],
  ["aaaa", "asdasdasdasd", true],
  ["aabb", "xyzabcxzyabc", false],
];

describe("word-pattern-ii", () => {
  test.each(cases)("pattern=%s, str=%=s) should be %i", (a, b, expected) => {
    expect(wordPattern(a, b)).toBe(expected);
  });
});
