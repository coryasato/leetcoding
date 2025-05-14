import { describe, expect, test } from "bun:test";
import generateTrees from './index';

const cases = [
  [3, [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]],
  [1, [[1]]],
];

describe("unique-binary-search-trees-2", () => {
  test.each(cases)("n=%i) should equal %o", (a, expected) => {
    expect(generateTrees(a)).toEqual(expected);
  });
});
