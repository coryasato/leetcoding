import { describe, expect, test } from "bun:test";
import findWords from './index';

const cases = [
  [[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"], ["oath","eat"]],
  [[["a","b"],["c","d"]], ["abcb"], []],
  [[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["etae"], ["etae"]],
  [[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["etaea"], []],            // Asserts that visited cells cannot be used more than once
  [[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["etaenaa"], ["etaenaa"]], // Sanity check for the avobe logic
];

describe("word-search-ii", () => {
  test.each(cases)("(board=%o, words=%o) should equal %o", (a, b, expected) => {
    expect(findWords(a, b)).toEqual(expected);
  });
});
