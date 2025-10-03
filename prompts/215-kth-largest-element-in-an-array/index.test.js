import { describe, expect, test } from "bun:test";
import findKthLargest from './index';

const cases = [
  [[3,2,1,5,6,4], 2, 5],
  [[3,2,3,1,2,4,5,5,6], 4, 4],
];

describe("kth-largest-element-in-an-array", () => {
  test.each(cases)("nums=%o, k=%i) should be %i", (a, b, expected) => {
    expect(findKthLargest(a, b)).toBe(expected);
  });
});
