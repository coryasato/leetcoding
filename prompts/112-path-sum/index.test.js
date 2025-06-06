import { describe, expect, test } from "bun:test";
import hasPathSum from './index';

const cases = [
  [[5,4,8,11,null,13,4,7,2,null,null,null,1], 22, true],
  [[1,2,3], 5, false],
  [[], 0, false],
];

describe("path-sum", () => {
  test.each(cases)("arr=%o, targetSum=%i) should be %p", (a, b, expected) => {
    expect(hasPathSum(a, b)).toBe(expected);
  });
});
