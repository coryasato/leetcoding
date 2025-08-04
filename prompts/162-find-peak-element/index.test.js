import { describe, expect, test } from "bun:test";
import findPeakElement from './index';

const cases = [
  [[1,2,3,1], 2],
  [[1,2,1,3,5,6,4], 5],
];

describe("find-peak-element", () => {
  test.each(cases)("nums=%o) should be %i", (a, expected) => {
    expect(findPeakElement(a)).toBe(expected);
  });
});
