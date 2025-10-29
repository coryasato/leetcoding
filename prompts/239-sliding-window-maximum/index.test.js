import { describe, expect, test } from "bun:test";
import maxSlidingWindow from './index';

const cases = [
  [[1,3,-1,-3,5,3,6,7], 3, [3,3,5,5,6,7]],
  [[1], 1, [1]],
];

describe("sliding-window-maximum", () => {
  test.each(cases)("nums=%o, k=%i) should equal %o", (a, b, expected) => {
    expect(maxSlidingWindow(a, b)).toEqual(expected);
  });
});
