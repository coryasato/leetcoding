import { describe, expect, test } from "bun:test";
import combinationSum from './index';

const cases = [
  [[2,3,6,7], 7, [[2,2,3], [7]]],
  [[2,3,5], 8, [[2,2,2,2],[2,3,3],[3,5]]],
  [[2], 1, []],
  [[2,3,6,7,3], 9, [[3, 3, 3], [6, 3], [3, 3, 3], [3, 3, 3], [3, 6], [2, 7]]],  // ***[ TEST 4 ]***
  [[2,3,6,7,5], 10, [[5, 5], [3, 7], [2, 2, 2, 2, 2], [2, 2, 6], [2, 3, 5]]],
];

// NOTE: ***[ TEST 4 ]***
// This test is specifically for the "frequency" language in the prompt. The two "3" items are considered unique.
// Thus each "3" should have its own [3,3,3] and the pair [3,3] combo should utitlize one of the threes for another [3,3,3].
// ...I think I understood the prompt correctly.

describe("combination-sum", () => {
  test.each(cases)("(arr=%o, target=%i) should contain %o", (a, b, expected) => {
    if (expected.length === 0) {
      expect(combinationSum(a, b)).toEqual([]);
    } else {
      expect(combinationSum(a, b)).toContainAllValues(expected);
    }
  });
});
