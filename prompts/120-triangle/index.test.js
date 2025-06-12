import { describe, expect, test } from "bun:test";
import minimumTotal from './index';

const cases = [
  [[[2],[3,4],[6,5,7],[4,1,8,3]], 11],
  [[[-10]], -10],
];

describe("triangle", () => {
  test.each(cases)("triangle=%o) should be %i", (a, expected) => {
    expect(minimumTotal(a)).toBe(expected);
  });
});
