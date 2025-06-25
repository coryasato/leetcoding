  import { describe, expect, test } from "bun:test";
import solve from './index';

const cases = [
  [[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]], [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]],
  [[["X"]], [["X"]]],
];

describe("surrounding-regions", () => {
  test.each(cases)("board=%o) should equal %o", (a, expected) => {
    expect(solve(a)).toEqual(expected);
  });
});
