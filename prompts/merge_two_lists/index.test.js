import { describe, expect, test } from "bun:test";
import mergeTwoLists from './index';

const cases = [
  [[1,2,4], [1,3,4], [1,1,2,3,4,4]],
  [[], [], []],
  [[], [0], [0]],
  [[1,2,4], [1,3,5,6,7,8], [1,1,2,3,4,5,6,7,8]],
];

describe("merge_two_lists", () => {
  test.each(cases)("%p %p should contain values %p", (a, b, expected) => {
    expect(mergeTwoLists(a, b)).toContainValues(expected);
  });
});
