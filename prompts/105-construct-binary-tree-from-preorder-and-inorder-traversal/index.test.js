import { describe, expect, test } from "bun:test";
import buildTree from './index';

const cases = [
  [[3,9,20,15,7], [9,3,15,20,7], [3,9,20,null,null,15,7]],
  [[-1], [-1], [-1]],
];

describe("construct-binary-tree-from-preorder-and-inorder-traversal", () => {
  test.each(cases)("preorder=%o, inorder=%o) should equal %o", (a, b, expected) => {
    expect(buildTree(a, b)).toEqual(expected);
  });
});
