import { describe, expect, test } from "bun:test";
import lengthOfLongestSubstring from './index';

const cases = [
  ["abcabcbb", "abc"],
  ["bbbbb", "b"],
  ["bbbbbe", "be"],
  ["pwwkew", "wke"],
  ["bebiboobootboo", "otb"],
];

describe("lengthOfLongestSubstring", () => {
  test.each(cases)("%p should contain values %p", (a, expected) => {
    expect(lengthOfLongestSubstring(a)).toBe(expected);
  });
});
