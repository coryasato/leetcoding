import { describe, expect, test } from "bun:test";
import inorderTraversal from './index';

const cases = [
  [[1,null,2,3], [1,3,2]],
  [[1,2,3,4,5,null,8,null,null,6,7,9], [4,2,6,5,7,1,3,9,8]],
];

describe("binary-tree-inorder-traversal", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(inorderTraversal(a)).toEqual(expected);
  });
});
