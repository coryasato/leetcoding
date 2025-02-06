import { describe, expect, test } from "bun:test";
import searchRange  from './index';

const cases = [
  [[5,7,7,8,8,10], 8, [3,4]],
  [[5,7,7,8,8,10], 6, [-1,-1]],
  [[], 0, [-1,-1]],
];

describe("find-first-last-in-array", () => {
  test.each(cases)("(nums=%o, target=%p) should equal %o", (a, b, expected) => {
    expect(searchRange(a, b)).toEqual(expected);
  });
});
