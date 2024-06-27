import { describe, expect, test } from "bun:test";
import twoSum from './index';

describe("twoSum", () => {
  const cases = [
    [[2,7,11,15], 9, [0,1]],
    [[3,2,4], 6, [1,2]],
    [[3,3], 6, [0,1]],
  ];

  test.each(cases)("%p, %p should contain values %p", (a, b, expected) => {
    expect(twoSum(a, b)).toContainValues(expected);
  });
});
