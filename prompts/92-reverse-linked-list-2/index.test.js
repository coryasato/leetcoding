import { describe, expect, test } from "bun:test";
import reverseBetween from './index';

const cases = [
  [[1,2,3,4,5], 2, 4, [1,4,3,2,5]],
  [[5], 1, 1, [5]],
];

describe("reverse-linked-list-2", () => {
  test.each(cases)("head=%o, left=%i, right=%i) should equal %o", (a, b, c, expected) => {
    expect(reverseBetween(a, b, c)).toEqual(expected);
  });
});
