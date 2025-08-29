import { describe, expect, test } from "bun:test";
import rightSideView from './index';

const cases = [
  [[1,2,3,null,5,null,4], [1,3,4]],
  [[1,2,3,4,null,null,null,5], [1,3,4,5]],
  [[1,null,3], [1,3]],
  [[], []],
];

describe("binary-tree-right-side-view", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(rightSideView(a)).toEqual(expected);
  });
});
