import { describe, expect, test } from "bun:test";
import search  from './index';

const cases = [
  [[4,5,6,7,0,1,2], 0, 4],
  [[4,5,6,7,0,1,2], 3, -1],
  [[1], 0, -1],
  [[6,7,0,1,3,4,5], 0, 2],
];

describe("search-in-rotated-array", () => {
  test.each(cases)("(nums=%o, target=%p) should equal %p", (a, b, expected) => {
    expect(search(a, b)).toEqual(expected);
  });
});
