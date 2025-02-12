import { describe, expect, test } from "bun:test";
import combinationSum2 from './index';

const cases = [
  [[10,1,2,7,6,1,5], 8, [[1, 7], [1, 2, 5], [2, 6], [1, 1, 6]]],
  [[2,5,2,1,2], 5, [[5], [1, 2, 2]]],
];

describe("combination-sum-2", () => {
  test.each(cases)("(candidates=%o, target=%i) should contain %o", (a, b, expected) => {
    expect(combinationSum2(a, b)).toContainAllValues(expected);
  });
});
