import { describe, expect, test } from "bun:test";
import searchMatrix from './index';

const cases = [
  [[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5, true],
  [[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20, false],
];

describe("search-a-2d-matrix-ii", () => {
  test.each(cases)("matrix=%o, target=%i) should be %p", (a, b, expected) => {
    expect(searchMatrix(a, b)).toBe(expected);
  });
});
