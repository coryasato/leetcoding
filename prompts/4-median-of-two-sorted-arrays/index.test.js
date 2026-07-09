import { describe, expect, test } from "bun:test";
import findMedianSortedArrays, {slowMedOfArrays} from './index';

const cases = [
  [[1,3], [2], 2],
  [[1,2], [3,4], 2.5],
];

// TODO: Time these with large arrays.

describe("findMedianSortedArrays", () => {
  test.each(cases)("%p, %p should contain values %p", (a, b, expected) => {
    expect(findMedianSortedArrays(a, b)).toEqual(expected);
  });
});

describe("slowMedOfArrays", () => {
  test.each(cases)("%p, %p should contain values %p", (a, b, expected) => {
    expect(slowMedOfArrays(a, b)).toEqual(expected);
  });
});
