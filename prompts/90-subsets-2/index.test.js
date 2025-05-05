import { describe, expect, test } from "bun:test";
import subsetsWithDups from './index';

const cases = [
  // [[1,2,2], [ [], [ 2 ], [ 2, 2 ], [ 1 ], [ 1, 2 ], [ 1, 2, 2 ] ]], // The recursive solution will return this shape (depth return first).
  [[1,2,2], [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 2 ], [ 2 ], [ 2, 2 ] ]],    // The iterative solution will return the items in order.
  [[0], [ [], [0] ]],
];

describe("subsets-2", () => {
  test.each(cases)("(nums=%o) should equal %o", (a, expected) => {
    expect(subsetsWithDups(a)).toEqual(expected);
  });
});
