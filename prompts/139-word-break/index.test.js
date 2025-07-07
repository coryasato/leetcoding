import { describe, expect, test } from "bun:test";
import wordBreak from './index';

const cases = [
  ["leetcode", ["leet","code"], true],
  ["applepenapple", ["apple","pen"], true],
  ["catsandog", ["cats","dog","sand","and","cat"], false],
];

describe("word-break", () => {
  test.each(cases)("s=%s, wordDict=%o) should be %p", (a, b, expected) => {
    expect(wordBreak(a, b)).toBe(expected);
  });
});
