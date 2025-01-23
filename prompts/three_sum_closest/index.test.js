import { describe, expect, test } from "bun:test";
import threeSumClosest, {threeSumClosestLinear} from './index';

const cases = [
  [[-1, 2, 1, 4], 4, 4],
  [[0, 0, 0], 1, 0],
  [[-1, 0, 0, 3, 4], -4, -1],
  [[0, 0, 3, 4], -4, 3],
  [[-15, 0, 0, 3, 4], -5000, -15],
];

describe("three_sum_closest", () => {
  test.each(cases)("%p should contain value %p", (a,b,  expected) => {
    expect(threeSumClosest(a, b)).toBe(expected);
  });
});

describe("threeSumClosestLinear", () => {
  test.each(cases)("%p should contain value %p", (a,b,  expected) => {
    expect(threeSumClosestLinear(a, b)).toBe(expected);
  });
});
