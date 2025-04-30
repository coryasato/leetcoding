import { describe, expect, test } from "bun:test";
import merge from './index';

const cases = [
  [[1,2,3,0,0,0], 3, [2,5,6], 3, [1,2,2,3,5,6]],
  [[1], 1, [], 0, [1]],
  [[0], 0, [1], 1, [1]],
];

describe("merge-sorted-array", () => {
  test.each(cases)("(nums1=%o, n=%i, nums2=%o, m=%i) should equal %o", (a, b, c, d, expected) => {
    expect(merge(a, b, c, d)).toEqual(expected);
  });
});
