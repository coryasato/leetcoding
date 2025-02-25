import { describe, expect, test } from "bun:test";
import maxSubArray from './index';

const cases = [
  [[-2,1,-3,4,-1,2,1,-5,4], 6],
  [[1], 1],
  [[5,4,-1,7,8], 23],
];

describe("maximum-subarray", () => {
  test.each(cases)("(nums=%o) should be %i", (a, expected) => {
    expect(maxSubArray(a)).toBe(expected);
  });
});
