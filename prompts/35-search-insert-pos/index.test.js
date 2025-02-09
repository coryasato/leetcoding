import { describe, expect, test } from "bun:test";
import searchInsert  from './index';

const cases = [
  [[1,3,5,6], 5, 2],
  [[1,3,5,6], 2, 1],
  [[1,3,5,6], 7, 4],
];

describe("search-insert-pos", () => {
  test.each(cases)("(nums=%o, target=%p) should equal %p", (a, b, expected) => {
    expect(searchInsert(a, b)).toEqual(expected);
  });
});
