import { describe, expect, test } from "bun:test";
import singleNumber from './index';

const cases = [
  [[1,2,1,3,2,5], [3,5]],
  [[-1,0], [-1,0]],
  [[0,1], [0,1]],
  [[0,3,1,9,9,5,6,3,0], [1,5,6]],
];

describe("single-number-iii", () => {
  test.each(cases)("nums=%o) should equal %o", (a, expected) => {
    expect(singleNumber(a)).toEqual(expected);
  });
});
