import { describe, expect, test } from "bun:test";
import fourSum from './index';

const cases = [
  [[1,0,-1,0,-2,2], 0, [[1, 0, -1, 0], [1, -1, -2, 2], [0, 0, -2, 2]]],
  [[2,2,2,2,2], 8, [[2, 2, 2, 2]]],
  [[5,0,-5,0,-10,1], -5, [[5, 0, 0, -10]]],
];

describe("four_sum", () => {
  test.each(cases)("%p %should match values %p", (a, b, expected) => {
    expect(fourSum(a, b)).toContainAllValues(expected);
  });
});
