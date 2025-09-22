import { describe, expect, test } from "bun:test";
import minSubArrayLen from './index';

const cases = [
  [7, [2,3,1,2,4,3], 2],
  [4, [1,4,4], 1],
  [11, [1,1,1,1,1,1,1,1], 0],
];

describe("minimum-size-subarray-sum", () => {
  test.each(cases)("(target=%i, nums=%o) should be %i", (a, b, expected) => {
    expect(minSubArrayLen(a, b)).toBe(expected);
  });
});
