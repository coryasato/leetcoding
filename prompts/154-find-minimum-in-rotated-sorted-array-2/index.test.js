import { describe, expect, test } from "bun:test";
import findMin from './index';

const cases = [
  [[1,3,5], 1],
  [[2,2,2,0,1], 0],
];

describe("find-minimum-in-rotated-sorted-array-2", () => {
  test.each(cases)("nums=%o) should equal %i", (a, expected) => {
    expect(findMin(a)).toEqual(expected);
  });
});
