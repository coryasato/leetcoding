import { describe, expect, test } from "bun:test";
import getIntersectionNode from './index';

const cases = [
  [8, [4,1,8,4,5], [5,6,1,8,4,5], 2, 3, 8],
  [2, [1,9,1,2,4], [3,2,4], 3, 1, 2],
  [0, [2,6,4], [1,5], 3, 2, 0],
];

describe("intersection-of-two-linked-lists", () => {
  test.each(cases)("intesectVal=%i, listA=%o, listB=%o, skipA=%i, skipB=%i) should be %i", (a, b, c, d, e, expected) => {
    expect(getIntersectionNode(a, b, c, d, e)).toBe(expected);
  });
});
