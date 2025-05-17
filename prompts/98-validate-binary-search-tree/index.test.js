import { describe, expect, test } from "bun:test";
import isValidBST from './index';

const cases = [
  [[2,1,3], true],
  [[5,1,4,null,null,3,6], false],
];

describe("validate-binary-search-tree", () => {
  test.each(cases)("arr=%o) should be %p", (a, expected) => {
    expect(isValidBST(a)).toBe(expected);
  });
});
