import { describe, expect, test } from "bun:test";
import isValidSudoku, { board1, board2 }  from './index';

const cases = [
  [board1, true],
  [board2, false],
];

describe("search-insert-pos", () => {
  test.each(cases)("(board=%o) should be %p", (a, expected) => {
    expect(isValidSudoku(a)).toEqual(expected);
  });
});
