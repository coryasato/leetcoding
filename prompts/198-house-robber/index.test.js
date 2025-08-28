import { describe, expect, test } from "bun:test";
import rob from './index';

const cases = [
  [[1,2,3,1], 4],
  [[2,7,9,3,1], 12],
];

describe("house-robber", () => {
  test.each(cases)("nums=%o) should be %i", (a, expected) => {
    expect(rob(a)).toBe(expected);
  });
});
