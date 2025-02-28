import { describe, expect, test } from "bun:test";
import insertInterval from './index';

const cases = [
  [[[1,3],[6,9]], [2,5], [[1,5],[6,9]]],
  [[[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8], [[1,2],[3,10],[12,16]]],
];

describe("insert-interval", () => {
  test.each(cases)("(intervals=%o, newInterval=%o) should equal array %o", (a, b, expected) => {
    expect(insertInterval(a, b)).toEqual(expected);
  });
});
