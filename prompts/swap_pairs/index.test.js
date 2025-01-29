import { describe, expect, test } from "bun:test";
import swapPairs, { swapPairsRecursive } from './index';

const cases = [
  [[1,2,3,4], [2,1,4,3]],
  [[], []],
  [[1], [1]],
  [[1,2,3], [2,1,3]],
];

describe("swap_pairs", () => {
  test.each(cases)("%p should contain values %p", (a, expected) => {
    expect(swapPairs(a)).toContainValues(expected);
  });
});

describe("swap_pairs::swapPairsRecursive", () => {
  test.each(cases)("%p should contain values %p", (a, expected) => {
    expect(swapPairsRecursive(a)).toContainValues(expected);
  });
});
