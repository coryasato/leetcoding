import { describe, expect, test } from "bun:test";
import search from './index';

const cases = [
  [[2,5,6,0,0,1,2], 0, true],
  [[[2,5,6,0,0,1,2]], 3, false],
  [[4,5,6,6,7,0,1,2,4,4], 5, true],
];

describe("search-in-rotated-array-2", () => {
  test.each(cases)("(nums=%o, target=%i) should be %p", (a, b, expected) => {
    expect(search(a, b)).toEqual(expected);
  });
});
