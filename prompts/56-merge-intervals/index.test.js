import { describe, expect, test } from "bun:test";
import mergeIntervals from './index';

const cases = [
  [[[1,3],[2,6],[8,10],[15,18]], [[1,6],[8,10],[15,18]]],
  [[[1,4],[4,5]], [[1,5]]],
  [[[1,3],[2,6],[6,7],[8,10],[15,18]], [[1, 7], [8, 10], [15, 18]]],
  [[[1,4],[4,5],[8,10]], [[1, 5], [8, 10]]],
  [[[1,4],[4,5],[6,7],[8,10],[10,12],[11,15]], [[1, 5], [6, 7], [8, 15]]],
];

describe("merge-intervals", () => {
  test.each(cases)("(intervals=%o) should equal %o", (a, expected) => {
    expect(mergeIntervals(a)).toEqual(expected);
  });
});
