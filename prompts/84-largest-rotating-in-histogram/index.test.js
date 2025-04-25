import { describe, expect, test } from "bun:test";
import largestRectArea from './index';

const cases = [
  [[2,1,5,6,2,3], 10],
  [[2,4], 4],
  [[2,1,5,6,3,3], 12],
  [[10,12], 20],
  [[10,6,9], 18],
];

describe("largest-rotating-in-histogram", () => {
  test.each(cases)("(heights=%o) should be %i", (a, expected) => {
    expect(largestRectArea(a)).toBe(expected);
  });
});
