import { describe, expect, test } from "bun:test";
import combinationSum3 from './index';

const cases = [
  [3, 7, [[1,2,4]]],
  [3, 9, [[1,2,6],[1,3,5],[2,3,4]]],
  [4, 1, []],
];

describe("combination-sum-iii", () => {
  test.each(cases)("k=%i, n=%i) should equal %o", (a, b, expected) => {
    expect(combinationSum3(a, b)).toEqual(expected);
  });
});
