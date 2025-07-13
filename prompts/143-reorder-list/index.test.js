import { describe, expect, test } from "bun:test";
import redorderList from './index';

const cases = [
  [[1,2,3,4], [1,4,2,3]],
  [[1,2,3,4,5], [1,5,2,4,3]],
];

describe("reorder-list", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(redorderList(a)).toEqual(expected);
  });
});
