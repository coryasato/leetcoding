import { describe, expect, test } from "bun:test";
import levelOrder from './index';

const cases = [
  [[3,9,20,null,null,15,7], [[3],[9,20],[15,7]]],
  [[1], [[1]]],
  [[], []],
];

describe("binary-tree-level-order-traversal", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(levelOrder(a)).toEqual(expected);
  });
});
