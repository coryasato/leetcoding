import { describe, expect, test } from "bun:test";
import computeArea from './index';

const cases = [
  [-3, 0, 3, 4, 0, -1, 9, 2, 45],
  [-2, -2, 2, 2, -2, -2, 2, 2, 16],
];

describe("rectangle-area", () => {
  test.each(cases)("ax1=%i, ay1=%i, ax2=%i, ay2=%i, bx1=%i, by1=%i, bx2=%i, by2=%i) should be %i", (a,b,c,d,e,f,g,h,expected) => {
    expect(computeArea(a,b,c,d,e,f,g,h)).toBe(expected);
  });
});
