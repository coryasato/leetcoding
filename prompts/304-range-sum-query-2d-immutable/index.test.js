import { describe, expect, test } from "bun:test";
import NumMatrix from './index';

const cases = [
  [
    [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]],
    [[2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]],
    [8, 11, 12],
  ],
];

describe("range-sum-query-2d-immutable", () => {
  test.each(cases)("(matrix=%o, argsArr=%o) should equal %o", (matrix, argsArr, expected) => {
    const numMatrix = new NumMatrix(matrix);
    expect(
      argsArr.map(args => numMatrix.sumRegion(...args))
    ).toEqual(expected);
  });
});
