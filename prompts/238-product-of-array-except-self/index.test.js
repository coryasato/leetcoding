import { describe, expect, test } from "bun:test";
import productExceptSelf from './index';

const cases = [
  [[1,2,3,4], [24,12,8,6]],
  [[-1,1,0,-3,3], [0,0,9,0,0]],
];

describe("product-of-array-except-self", () => {
  test.each(cases)("nums=%o) should equal %o", (a, expected) => {
    expect(productExceptSelf(a)).toEqual(expected);
  });
});
