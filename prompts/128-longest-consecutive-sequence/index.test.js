  import { describe, expect, test } from "bun:test";
import longestConsecutive from './index';

const cases = [
  [[100,4,200,1,3,2], 4],
  [[0,3,7,2,5,8,4,6,0,1], 9],
  [[1,0,1,2], 3],
];

describe("longest-consecutive-sequence", () => {
  test.each(cases)("nums=%o) should be %i", (a, expected) => {
    expect(longestConsecutive(a)).toBe(expected);
  });
});
