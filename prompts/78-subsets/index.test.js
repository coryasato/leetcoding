import { describe, expect, test } from "bun:test";
import subsets from './index';

const cases = [
  [[1,2,3], [[], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ], [ 2 ], [ 2, 3 ], [ 3 ]]],
  [[0], [[], [ 0 ]]],
  [[1,2,3,4], [[], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 2, 3, 4 ], [ 1, 3 ], [ 1, 3, 4 ], [ 1, 4 ], [ 2 ], [ 2, 3 ], [ 2, 3, 4 ], [ 2, 4 ], [ 3 ], [ 3, 4 ], [ 4 ]]],
];

describe("subsets", () => {
  test.each(cases)("nums=%o) should equal %o", (a, expected) => {
    expect(subsets(a)).toEqual(expected);
  });
});
