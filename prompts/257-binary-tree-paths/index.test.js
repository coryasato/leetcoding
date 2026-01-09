import { describe, expect, test } from "bun:test";
import binaryTreePaths from './index';

const cases = [
  [[1,2,3,null,5], ["1->2->5","1->3"]],
  [[1], ["1"]],
  [[1,2,3,4,5], ["1->2->4","1->2->5","1->3"]],
];

describe("binary-tree-paths", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(binaryTreePaths(a)).toEqual(expected);
  });
});
