import { describe, expect, test } from "bun:test";
import removeDuplicates from './index';

const cases = [
  [[1,1,1,2,2,3], { k: 5, array: [1,1,2,2,3,"_"] }],
  [[0,0,1,1,1,1,2,3,3], { k: 7, array: [0,0,1,1,2,3,3,"_","_"] }],
];

const filterUnderscores = nums => nums.filter(n => n === '_');

describe("remove-dupes-2", () => {
  test.each(cases)("(nums=%o) should be %o", (a, expected) => {
    expect(removeDuplicates(a)).toBe(expected.k);
    expect(a).toEqual(expected.array);
  });
});
