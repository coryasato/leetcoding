import { describe, expect, test } from "bun:test";
import mergeKLists, { mergeKListsBrute } from './index';

const cases = [
  [[[1,4,5], [1,3,4], [2,6]], [1,1,2,3,4,4,5,6]],
  [[], []],
  [[[]], []],
];

describe("merge_k_lists", () => {
  test.each(cases)("%p should equal array %p", (a, expected) => {
    expect(mergeKLists(a)).toEqual(expected);
  });
});

describe("merge_k_lists::mergeKListsBrute", () => {
  test.each(cases)("%p should equal array %p", (a, expected) => {
    expect(mergeKListsBrute(a)).toEqual(expected);
  });
});
