import { describe, expect, test } from "bun:test";
import sortedArrayToBST from './index';

const cases = [
  [[-10,-3,0,5,9], [0,-3,9,-10,null,5]],
  [[1,3], [3,1]],
];

describe("convert-sorted-array-to-binary-search-tree", () => {
  test.each(cases)("nums=%o) should equal %o", (a, expected) => {
    expect(sortedArrayToBST(a)).toEqual(expected);
  });
});
