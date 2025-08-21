import { describe, expect, test } from "bun:test";
import rotate from './index';

const cases = [
  [[1,2,3,4,5,6,7], 3, [5,6,7,1,2,3,4]],
  [[1,2,3,4,5,6,7], 6, [2,3,4,5,6,7,1]],
  [[1,2,3,4,5,6,7], 8, [7,1,2,3,4,5,6]],
  [[1,2,3,4,5,6,7], 15, [7,1,2,3,4,5,6]],  // 7 + 7 + 1 (length + length + 1) [Same as k=8 or k=1]
  [[-1,-100,3,99], 2, [3,99,-1,-100]],
  [[-1,-100,3,99], 4, [-1,-100,3,99]],
  [[-1,-100,3,99], 6, [3,99,-1,-100]],
];

describe("rotate-array", () => {
  test.each(cases)("nums=%o, k=%i) should equal %=o", (a, b, expected) => {
    expect(rotate(a, b)).toEqual(expected);
  });
});
