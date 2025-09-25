import { describe, expect, test } from "bun:test";
import findWords from './index';

const cases = [
  [[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"], ["oath","eat"]],
  [[["a","b"],["c","d"]], ["abcb"], []],
];

describe("word-search-ii", () => {
  test.each(cases)("(board=%o, words=%o) should equal %o", (a, b, expected) => {
    expect(findWords(a, b)).toEqual(expected);
  });
});
