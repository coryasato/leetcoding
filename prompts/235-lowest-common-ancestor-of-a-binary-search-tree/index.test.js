import { describe, expect, test } from "bun:test";
import lowestCommonAncestor from './index';

const cases = [
  [[6,2,8,0,4,7,9,null,null,3,5], 2, 8, 6],
  [[6,2,8,0,4,7,9,null,null,3,5], 2, 4, 2],
  [[2,1], 2, 1, 2],
];

describe("lowest-common-ancestor-of-a-binary-search-tree", () => {
  test.each(cases)("arr=%o, p=%i, q=%i) should be %p", (a, b, c, expected) => {
    expect(lowestCommonAncestor(a,b,c)).toBe(expected);
  });
});
