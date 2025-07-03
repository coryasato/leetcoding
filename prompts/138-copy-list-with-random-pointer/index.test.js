import { describe, expect, test } from "bun:test";
import copyRandomList from './index';

const cases = [
  [[[7,null],[13,0],[11,4],[10,2],[1,0]], [[7,null],[13,0],[11,4],[10,2],[1,0]]],
  [[[1,1],[2,1]], [[1,1],[2,1]]],
  [[[3,null],[3,0],[3,null]], [[3,null],[3,0],[3,null]]],
];

describe("copy-list-with-random-pointer", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(copyRandomList(a)).toEqual(expected);
  });
});
