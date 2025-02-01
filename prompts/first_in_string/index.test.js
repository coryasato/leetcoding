import { describe, expect, test } from "bun:test";
import firstInString from './index';

const _ = "_";
const cases = [
  ['sadbutsad', 'sad', 0],
  ['leetcode', 'leeto', -1],
  ['leetcodemeatcode', 'code', 4],
];

describe("first_in_string", () => {
  test.each(cases)("(haystack=%p, needle=%p) should return %p", (a, b, expected) => {
    expect(firstInString(a, b)).toBe(expected);
  });
});
