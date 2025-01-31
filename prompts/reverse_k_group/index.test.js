import { describe, expect, test } from "bun:test";
import reverseKGroup, { reverseKGroupBrute } from './index';

const cases = [
  [[1,2,3,4,5], 2, [2,1,4,3,5]],
  [[1,2,3,4,5], 3, [3,2,1,4,5]],
];

describe("merge_k_lists", () => {
  test.each(cases)("%p %p should equal array %p", (a, b, expected) => {
    expect(reverseKGroup(a, b)).toEqual(expected);
  });
});

describe("merge_k_lists::reverseKGroupBrute", () => {
  test.each(cases)("%p %p should equal array %p", (a, b, expected) => {
    expect(reverseKGroupBrute(a, b)).toContainAllValues(expected);
  });
});
