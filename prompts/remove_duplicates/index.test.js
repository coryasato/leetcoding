import { describe, expect, test } from "bun:test";
import removeDuplicates, { removeDuplicatesReturnNums } from './index';

const cases = [
  [[1,1,2], 2],
  [[0,0,1,1,1,2,2,3,3,4], 5],
];

describe("remove_duplicates", () => {
  test.each(cases)("%p should equal array %p", (a, expected) => {
    expect(removeDuplicates(a)).toBe(expected);
  });
});

const _ = '_';
const casesB = [
  [[1,1,2], { count: 2, nums: [1,2,_] }],
  [[0,0,1,1,1,2,2,3,3,4], { count: 5, nums: [0,1,2,3,4,_,_,_,_,_] }],
];

describe("remove_duplicates::removeDuplicatesReturnNums", () => {
  test.each(casesB)("%p should match object %p", (a, expected) => {
    expect(removeDuplicatesReturnNums(a)).toMatchObject(expected);
  });
});
