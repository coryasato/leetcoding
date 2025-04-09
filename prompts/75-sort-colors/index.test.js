import { describe, expect, test } from "bun:test";
import sortColors from './index';

const cases = [
  [[2,0,2,1,1,0]],
  [[2,0,1]],
];

const isSorted = (arr) => {
  return arr.every((el, i) => {
    if (i === arr.length-1) return true;
    return el <= arr[i + 1];
  });
};

describe("sort-colors", () => {
  test.each(cases)('(nums=%o) should be mutated and sorted', a => {
    expect(isSorted(a)).toBe(false);
    sortColors(a);
    expect(isSorted(a)).toBe(true);
  });
});
