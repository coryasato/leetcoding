import { describe, expect, test } from "bun:test";
import zigzagLevelOrder from './index';

const cases = [
  [[3,9,20,null,null,15,7], [[3],[20,9],[15,7]]],
  [[1], [[1]]],
  [[], []],
];

describe("binary-tree-zigzag-level-order-traversal", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(zigzagLevelOrder(a)).toEqual(expected);
  });
});
