import { describe, expect, test } from "bun:test";
import countSmaller from './index';

const cases = [
  [[5,2,6,1], [2,1,1,0]],
  [[-1], [0]],
  [[-1,-1], [0,0]],
];

describe("count-of-smaller-numbers-after-self", () => {
  test.each(cases)("(nums=%o) should equal %o", (a, expected) => {
    expect(countSmaller(a)).toEqual(expected);
  });
});
