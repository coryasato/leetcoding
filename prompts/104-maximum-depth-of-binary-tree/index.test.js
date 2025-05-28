import { describe, expect, test } from "bun:test";
import maxDepth from './index';

const cases = [
  [[3,9,20,null,null,15,7], 3],
  [[1,null,2], 2],
];

describe("maximum-depth-of-binary-tree", () => {
  test.each(cases)("arr=%o) should be %i", (a, expected) => {
    expect(maxDepth(a)).toBe(expected);
  });
});
