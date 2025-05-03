import { describe, expect, test } from "bun:test";
import grayCode from './index';

const cases = [
  [2, [0, 2, 3, 1]],
  [1, [0, 1]],
  [5, [0, 2, 4, 5, 8, 11, 7, 6, 3, 1]],
  [8, [0, 2, 4, 5, 8, 9, 16, 17, 19, 23, 11, 15, 7, 6, 3, 1]]
];

describe("gray-code", () => {
  test.each(cases)("(n=%i) should equal %o", (a, expected) => {
    expect(grayCode(a)).toEqual(expected);
    expect(expected.length).toEqual(a * 2);
  });
});
