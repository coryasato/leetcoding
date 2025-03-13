import { describe, expect, test } from "bun:test";
import plusOne from './index';

const cases = [
  [[1,2,3], [1,2,4]],
  [[4,3,2,1], [4,3,2,2]],
  [[9], [1,0]],
  [[9,9,9,9], [1,0,0,0,0]],
];

describe("plus-one", () => {
  test.each(cases)("(digits=%o) should equal %o", (a, expected) => {
    expect(plusOne(a)).toEqual(expected);
  });
});
