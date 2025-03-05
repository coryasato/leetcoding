import { describe, expect, test } from "bun:test";
import getPermutation from './index';

const cases = [
  [3, 3, '213'],
  [4, 9, '2314'],
  [3, 1, '123'],
];

describe("spiral-matrix", () => {
  test.each(cases)("(n=%i, k=%i) should be %s", (a, b, expected) => {
    expect(getPermutation(a, b)).toEqual(expected);
  });
});
