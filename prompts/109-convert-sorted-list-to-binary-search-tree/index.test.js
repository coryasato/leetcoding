import { describe, expect, test } from "bun:test";
import sortedListToBST from './index';

const cases = [
  [[-10,-3,0,5,9], [0,-3,9,-10,null,5]],
  [[], []],
];

describe("convert-sorted-list-to-binary-search-tree", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(sortedListToBST(a)).toEqual(expected);
  });
});
