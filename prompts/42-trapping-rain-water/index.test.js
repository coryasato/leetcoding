import { describe, expect, test } from "bun:test";
import trap from './index';

const cases = [
  [[0,1,0,2,1,0,1,3,2,1,2,1], 6],
  [[4,2,0,3,2,5], 9],
];

describe("trapping-rain-water", () => {
  test.each(cases)("(height=%o) should be %i", (a, expected) => {
    expect(trap(a)).toEqual(expected);
  });
});
