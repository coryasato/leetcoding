import { describe, expect, test } from "bun:test";
import maxArea from './index';

const cases = [
  [[1,8,6,2,5,4,8,3,7], 49],
  [[1,1], 1],
  [[1,7,6,2,4,8,7,3], 35],
];

describe("container_with_most_water", () => {
  test.each(cases)("%p should contain values %p", (a, expected) => {
    expect(maxArea(a)).toBe(expected);
  });
});
