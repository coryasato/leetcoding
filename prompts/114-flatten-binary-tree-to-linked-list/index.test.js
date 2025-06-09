import { describe, expect, test } from "bun:test";
import flatten from './index';

const cases = [
  [[1,2,5,3,4,null,6], [1,null,2,null,3,null,4,null,5,null,6]],
  [[0], [0]],
  [[], []],
];

describe("flatten-binary-tree-to-linked-list", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(flatten(a)).toEqual(expected);
  });
});
