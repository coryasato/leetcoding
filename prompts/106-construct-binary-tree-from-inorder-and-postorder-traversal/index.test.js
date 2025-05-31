import { describe, expect, test } from "bun:test";
import buildTree from './index';

const cases = [
  [[9,3,15,20,7], [9,15,7,20,3], [3,9,20,null,null,15,7]],
  [[-1], [-1], [-1]],
];

describe("construct-binary-tree-from-inorder-and-postorder-traversal", () => {
  test.each(cases)("inorder=%o, postorder=%o) should equal %o", (a, b, expected) => {
    expect(buildTree(a, b)).toEqual(expected);
  });
});
