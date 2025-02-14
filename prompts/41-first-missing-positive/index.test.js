import { describe, expect, test } from "bun:test";
import firstMissingPositive from './index';

const cases = [
  [[1,2,0], 3],
  [[3,4,-1,1], 2],
  [[7,8,9,11,12], 1],
];

describe("first-missing-positive", () => {
  test.each(cases)("(nums=%o) should be %i", (a, expected) => {
    expect(firstMissingPositive(a)).toBe(expected);
  });
});
