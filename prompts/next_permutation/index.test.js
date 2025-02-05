import { describe, expect, test } from "bun:test";
import nextPermutation from './index';

const cases = [
  [[1,2,3], [1,3,2]],
  [[3,2,1], [1,2,3]],
  [[1,1,5], [1,5,1]],
  [[1,2,3,6,4], [1,2,4,3,6]],
];

describe("next_permutation", () => {
  test.each(cases)("(nums=%o) should equal array %o", (a, expected) => {
    expect(nextPermutation(a)).toEqual(expected);
  });
});
