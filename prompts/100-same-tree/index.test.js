import { describe, expect, test } from "bun:test";
import isSameTree from './index';

const cases = [
  [[1,2,3], [1,2,3], true],
  [[1,2], [1,null,2], false],
  [[1,2,1], [1,1,2], false],
  [[1,null,2,null,3], [1,null,2,null,3], true],
];

describe("same-tree", () => {
  test.each(cases)("p=%o, q=%o) should be %p", (a, b, expected) => {
    expect(isSameTree(a, b)).toBe(expected);
  });
});
