import { describe, expect, test } from "bun:test";
import isSymmetric from './index';

const cases = [
  [[1,2,2,3,4,4,3], true],
  [[1,2,2,null,3,null,3], false],
];

describe("symmetric-tree", () => {
  test.each(cases)("arr=%o) should be %p", (a, expected) => {
    expect(isSymmetric(a)).toBe(expected);
  });
});
