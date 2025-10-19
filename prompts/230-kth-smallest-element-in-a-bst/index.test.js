import { describe, expect, test } from "bun:test";
import kthSmallest from './index';

const cases = [
  [[3,1,4,null,2], 1, 1],
  [[5,3,6,2,4,null,null,1], 3, 3],
  [[5,3,7,2,4], 3, 4],
];

describe("kth-smallest-element-in-a-bst", () => {
  test.each(cases)("arr=%o, k=%i) should be %i", (a, b, expected) => {
    expect(kthSmallest(a, b)).toBe(expected);
  });
});
