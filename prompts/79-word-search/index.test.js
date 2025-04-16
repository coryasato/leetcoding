import { describe, expect, test } from "bun:test";
import exist from './index';

const cases = [
  [[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED", true],
  [[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE", true],
  [[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB", false],
  [[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ZOO", false],
];

describe("word-search", () => {
  test.each(cases)("(board=%o, word=%s) should be %p", (a, b, expected) => {
    expect(exist(a, b)).toBe(expected);
  });
});
