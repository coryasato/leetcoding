import { describe, expect, test } from "bun:test";
import maxPathSum from './index';

const cases = [
  [[1,2,3], 6],
  [[-10,9,20,null,null,15,7], 42],
];

describe("binary-tree-maximum-path-sum", () => {
  test.each(cases)("arr=%o) should be %i", (a, expected) => {
    expect(maxPathSum(a)).toBe(expected);
  });
});
