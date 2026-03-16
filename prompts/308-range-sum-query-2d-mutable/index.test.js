import { describe, expect, test } from "bun:test";
import NumArray from './index';

const MATRIX = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
];

const cases = [
  [
    [
      [null, structuredClone(MATRIX)],
      ['sumRegion', [2,1,4,3]],
      ['update', [3,2,2]],
      ['sumRegion', [2,1,4,3]],
    ],
    [8, null, 10]
  ],
];

describe("range-sum-query-2d-mutable", () => {
  test.each(cases)("(commands=%o) should equal %o", (commands, expected) => {
    const numArray = new NumArray(commands.shift()[1]);

    expect(
      commands.map(([command, args]) => numArray[command](...args))
    ).toEqual(expected);
  });
});
