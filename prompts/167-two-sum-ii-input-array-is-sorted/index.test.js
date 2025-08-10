import { describe, expect, test } from "bun:test";
import twoSum from './index';

const cases = [
  [[2,7,11,15], 9, [1,2]],
  [[2,3,4], 6, [1,3]],
  [[-1,0], -1, [1,2]],
];

describe("two-sum-ii-input-array-is-sorted", () => {
  test.each(cases)("nums=%o, target=%i) should equal %o", (a, b, expected) => {
    expect(twoSum(a, b)).toEqual(expected);
  });
});
