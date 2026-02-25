import { describe, expect, test } from "bun:test";
import smallestRect from './index';

const cases = [
  [[["0","0","1","0"],["0","1","1","0"],["0","1","0","0"]], 0, 2, 6],
  [[["1"]], 0, 0, 1],
  // Worst case, max sized grid. Commenting out to reduce noise.
  //[Array.from({length: 100}, () => Array(100).fill('1')), 42, 73, 10000],
];

describe("smallest-rectangle-enclosing-black-pixels", () => {
  test.each(cases)("(matrix=%o, x=%i, y=%i) should be %p", (a, b, c, expected) => {
    expect(smallestRect(a, b, c)).toEqual(expected);
  });
});
