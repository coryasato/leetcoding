import { describe, expect, test } from "bun:test";
import permute from './index';

const cases = [
  [[1,2,3], [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]],
  [[0,1], [[0,1],[1,0]]],
  [[1], [[1]]],
];

describe("permutations", () => {
  test.each(cases)("(nums=%o) should equal array %o", (a, expected) => {
    expect(permute(a)).toContainAllValues(expected);
  });
});
