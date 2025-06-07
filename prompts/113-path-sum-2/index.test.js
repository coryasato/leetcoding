import { describe, expect, test } from "bun:test";
import pathSum from './index';

const cases = [
  [[5,4,8,11,null,13,4,7,2,null,null,5,1], 22, [[5,4,11,2],[5,8,4,5]]],
  [[1,2,3], 5, []],
  [[], 0, []],
];

describe("path-sum-2", () => {
  test.each(cases)("arr=%o, targetSum=%i) should equal %o", (a, b, expected) => {
    expect(pathSum(a, b)).toEqual(expected);
  });
});
