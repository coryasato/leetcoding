import { describe, expect, test } from "bun:test";
import removeNthFromEnd, { removeNthFromEndRec } from './index';

const cases = [
  [[1,2,3,4,5], 2, [1,2,3,5]],
  [[1], 1, []],
  [[1,2], 1, [1]],
  [[1,2,3,4,5,6,7,8,9], 5, [1, 2, 3, 4, 6, 7, 8, 9]],
];

describe("remove_nth_node", () => {
  test.each(cases)("%p %p should contain values %p", (a, b, expected) => {
    expect(removeNthFromEnd(a, b)).toContainValues(expected);
  });
});

describe("remove_nth_node::removeNthFromEndRec", () => {
  test.each(cases)("%p %p should contain values %p", (a, b, expected) => {
    expect(removeNthFromEndRec(a, b)).toContainValues(expected);
  });
});
