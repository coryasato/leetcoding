import { describe, expect, test } from "bun:test";
import gameOfLife from './index';

const cases = [
  [[[0,1,0],[0,0,1],[1,1,1],[0,0,0]], [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]],
  [[[1,1],[1,0]], [[1,1],[1,1]]],
];

describe("game-of-life", () => {
  test.each(cases)("board=%o) should equal %o", (a, expected) => {
    gameOfLife(a);
    expect(a).toEqual(expected);
  });
});
