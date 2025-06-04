import { describe, expect, test } from "bun:test";
import isBalanced from './index';

const cases = [
  [[3,9,20,null,null,15,7], true],
  [[1,2,2,3,3,null,null,4,4], false],
  [[], true],
];

describe("balanced-binary-tree", () => {
  test.each(cases)("arr=%o) should be %p", (a, expected) => {
    expect(isBalanced(a)).toBe(expected);
  });
});
