import { describe, expect, test } from "bun:test";
import numTrees from './index';

const cases = [
  [3, 5],
  [1, 1],
];

describe("unique-binary-search-trees", () => {
  test.each(cases)("n=%i) should equal %i", (a, expected) => {
    expect(numTrees(a)).toEqual(expected);
  });
});
