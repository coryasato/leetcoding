import { describe, expect, test } from "bun:test";
import permuteUnique from './index';

const cases = [
  [[1,1,2], [[1,1,2],[1,2,1],[2,1,1]]],
  [[1,2,3], [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]],
];

describe("permutations-2", () => {
  test.each(cases)("(nums=%o) should equal array %o", (a, expected) => {
    expect(permuteUnique(a)).toContainAllValues(expected);
  });
});
