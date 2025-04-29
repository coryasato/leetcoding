import { describe, expect, test } from "bun:test";
import partition from './index';

const cases = [
  [[1,4,3,2,5,2], 3, [1,2,2,4,3,5]],
  [[2,1], 2, [1,2]],
];

describe("partition-list", () => {
  test.each(cases)("(arr=%o, x=%i) should equal %o", (a, b, expected) => {
    expect(partition(a, b)).toEqual(expected);
  });
});
