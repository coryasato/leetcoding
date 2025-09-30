import { describe, expect, test } from "bun:test";
import rob from './index';

const cases = [
  [[2,3,2], 3],
  [[1,2,3,1], 4],
  [[1,2,3], 3],
];

describe("house-robber-ii", () => {
  test.each(cases)("(nums=%o) should be %i", (a, expected) => {
    expect(rob(a)).toBe(expected);
  });
});
