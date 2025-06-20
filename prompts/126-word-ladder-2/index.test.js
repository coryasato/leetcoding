import { describe, expect, test } from "bun:test";
import findLadders from './index';

const cases = [
  ["hit", "cog", ["hot","dot","dog","lot","log","cog"], [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]],
  ["hit", "cog", ["hot","dot","dog","lot","log"], []],
];

describe("word-ladder-2", () => {
  test.each(cases)("beginWord=%s, endWord=%s, wordList=%o) should equal %o", (a, b, c, expected) => {
    expect(findLadders(a, b, c)).toEqual(expected);
  });
});
