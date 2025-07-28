import { describe, expect, test } from "bun:test";
import maxProduct, { _maxProduct } from './index';

const cases = [
  [[2,3,-2,4], 6],
  [[-2,0,-1], 0],
];

describe("maximum-product-subarray", () => {
  test.each(cases)("nums=%o) should equal %i", (a, expected) => {
    expect(maxProduct(a)).toBe(expected);
  });

  test.each(cases)("nums=%o) should equal %i", (a, expected) => {
    expect(_maxProduct(a)).toBe(expected);
  });
});
