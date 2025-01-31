import { describe, expect, test } from "bun:test";
import { removeElementForTests } from './index';

const _ = "_";
const cases = [
  [[3,2,2,3], 3, { count: 2, nums: [2,2,_,_] }],
  [[0,1,2,2,3,0,4,2], 2, { count: 5, nums: [0,1,3,0,4,_,_,_] }],
];

describe("remove_element::removeElementForTests", () => {
  test.each(cases)("(nums=%p, val=%p) should equal %o", (a, b, expected) => {
    expect(removeElementForTests(a, b)).toEqual(expected);
  });
});
