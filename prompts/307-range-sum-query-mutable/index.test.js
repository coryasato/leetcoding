import { describe, expect, test } from "bun:test";
import NumArray from './index';

const cases = [
  [
    [
      [null, [1,3,5]],
      ['sumRange', [0,2]],
      ['update', [1,2]],
      ['sumRange', [0,2]],
    ],
    [9, null, 8]
  ],
];

describe("range-sum-query-mutable", () => {
  test.each(cases)("(commands=%o) should equal %o", (commands, expected) => {
    const numArray = new NumArray(commands.shift()[1]);

    expect(
      commands.map(([command, args]) => numArray[command](...args))
    ).toEqual(expected);
  });
});
