import { describe, expect, test } from "bun:test";
import threeSum from './index';

const cases = [
  [[-1,0,1,2,-1,-4], [[-1,-1,2], [-1,0,1]]],
  [[0,1,1], []],
  [[0,0,0], [[0,0,0]]],
];

describe("three_sum", () => {
  test.each(cases)("%p should contain values %p", (a, expected) => {
    expect(threeSum(a)).toContainValues(expected);
  });
});
