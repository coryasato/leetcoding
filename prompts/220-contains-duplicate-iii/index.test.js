import { describe, expect, test } from "bun:test";
import containsNearbyAlmostDuplicate from './index';

const cases = [
  [[1,2,3,1], 3, 0, true],
  [[1,5,9,1,5,9], 2, 3, false],
];

describe("contains-duplicate-iii", () => {
  test.each(cases)("nums=%o, indexDiff=%i, valueDiff=%i) should be %p", (a, b, c, expected) => {
    expect(containsNearbyAlmostDuplicate(a, b, c)).toBe(expected);
  });
});
