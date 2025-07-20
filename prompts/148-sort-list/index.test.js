import { describe, expect, test } from "bun:test";
import sortList from './index';

const cases = [
  [[4,2,1,3], [1,2,3,4]],
  [[-1,5,3,4,0], [-1,0,3,4,5]],
  [[], []],
];

describe("sort-list", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(sortList(a)).toEqual(expected);
  });
});
