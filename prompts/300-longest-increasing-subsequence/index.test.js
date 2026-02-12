import { describe, expect, test } from "bun:test";
import lengthOfLIS from './index';

const cases = [
  [[10,9,2,5,3,7,101,18], 4],
  [[0,1,0,3,2,3], 4],
  [[7,7,7,7,7,7,7], 1],
];

describe("longest-increasing-subsequence", () => {
  test.each(cases)("(nums=%o) should be %p", (a, expected) => {
    expect(lengthOfLIS(a)).toBe(expected);
  });
});
