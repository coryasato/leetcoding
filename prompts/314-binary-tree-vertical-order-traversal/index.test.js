import { describe, expect, test } from "bun:test";
import verticalOrder from './index';

const cases = [
  [[3,9,20,null,null,15,7], [[9],[3,15],[20],[7]]],
  [[3,9,8,4,0,1,7], [[4],[9],[3,0,1],[8],[7]]],
  [[1,2,3,4,10,9,11,null,5,null,null,null,null,null,null,null,6], [[4],[2,5],[1,10,9,6],[3],[11]]],
];

describe("binary-tree-vertical-order-traversal", () => {
  test.each(cases)("(arr=%o) should equal %o", (a, expected) => {
    expect(verticalOrder(a)).toEqual(expected);
  });
});
