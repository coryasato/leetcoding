import { describe, expect, test } from "bun:test";
import levelOrderBottom from './index';

const cases = [
  [[3,9,20,null,null,15,7], [[15,7],[9,20],[3]]],
  [[1], [[1]]],
  [[], []],
];

describe("binary-tree-level-order-traversal-2", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(levelOrderBottom(a)).toEqual(expected);
  });
});
