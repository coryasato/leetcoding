import { describe, expect, test } from "bun:test";
import containsNearbyDuplicate from './index';

const cases = [
  [[1,2,3,1], 3, true],
  [[1,0,1,1], 1, true],
  [[1,2,3,1,2,3], 2, false],
];

describe("contains-duplicate-ii", () => {
  test.each(cases)("nums=%o, k=%i) should be %p", (a, b, expected) => {
    expect(containsNearbyDuplicate(a, b)).toBe(expected);
  });
});
