import { describe, expect, test } from "bun:test";
import minDepth from './index';

const cases = [
  [[3,9,20,null,null,15,7], 2],
  [[2,null,3,null,4,null,5,null,6], 5],
  [[3], 1],
];

describe("minimum-depth-of-binary-tree", () => {
  test.each(cases)("arr=%o) should be %i", (a, expected) => {
    expect(minDepth(a)).toBe(expected);
  });
});
