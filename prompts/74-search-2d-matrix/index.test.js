import { describe, expect, test } from "bun:test";
import searchMatrix from './index';

const cases = [
  [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3, true],
  [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13, false],
];

describe("simplify-path", () => {
  test.each(cases)("(matrix=%o, target=%i) should be %p", (a, b, expected) => {
    expect(searchMatrix(a, b)).toBe(expected);
  });
});
