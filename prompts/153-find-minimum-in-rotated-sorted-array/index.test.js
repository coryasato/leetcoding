import { describe, expect, test } from "bun:test";
import findMin from './index';

const cases = [
  [[3,4,5,1,2], 1],
  [[4,5,6,7,0,1,2], 0],
  [[11,13,15,17], 11],
];

describe("find-minimum-in-rotated-sorted-array", () => {
  test.each(cases)("nums=%o) should equal %i", (a, expected) => {
    expect(findMin(a)).toEqual(expected);
  });
});
