import { describe, expect, test } from "bun:test";
import BSTIterator from './index';

const cases = [
  [
    [7, 3, 15, null, null, 9, 20],
    ["next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"],
    [3, 7, true, 9, true, 15, true, 20, false],
  ],
];

describe("binary-search-tree-iterator", () => {
  test.each(cases)("input=%o, instructions=%o) should equal %o", (a, b, expected) => {
    const iterator = new BSTIterator(a);
    expect(b.map(instruction => iterator[instruction]())).toEqual(expected);
  });
});
