import { describe, expect, test } from "bun:test";
import wordBreak from './index';

const cases = [
  ["catsanddog", ["cat","cats","and","sand","dog"], ["cat sand dog","cats and dog"]],
  ["pineapplepenapple", ["apple","pen","applepen","pine","pineapple"], ["pine applepen apple","pine apple pen apple","pineapple pen apple"]],
  ["catsandog", ["cats","dog","sand","and","cat"], []],
];

describe("word-break-2", () => {
  test.each(cases)("s=%s, wordDict=%o) should equal %o", (a, b, expected) => {
    expect(wordBreak(a, b)).toEqual(expected);
  });
});
