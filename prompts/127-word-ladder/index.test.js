import { describe, expect, test } from "bun:test";
import ladderLength from './index';

const cases = [
  ["hit", "cog", ["hot","dot","dog","lot","log","cog"], 5],
  ["hit", "cog", ["hot","dot","dog","lot","log"], 0],
];

describe("word-ladder", () => {
  test.each(cases)("beginWord=%s, endWord=%s, wordList=%o) should be %i", (a, b, c, expected) => {
    expect(ladderLength(a, b, c)).toEqual(expected);
  });
});
