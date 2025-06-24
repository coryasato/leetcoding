  import { describe, expect, test } from "bun:test";
import sumNumbers from './index';

const cases = [
  [[1,2,3], 25],
  [[4,9,0,5,1], 1026],
];

describe("sum-root-to-leaf-numbers", () => {
  test.each(cases)("arr=%o) should be %i", (a, expected) => {
    expect(sumNumbers(a)).toBe(expected);
  });
});
