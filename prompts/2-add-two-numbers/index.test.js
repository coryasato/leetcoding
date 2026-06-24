import { describe, expect, test } from "bun:test";
import addTwoNumbers from './index';

describe("addTwoNumbers", () => {
  // Each case is the arguments passed into the callback.
  // Ex. [1, 2, 3] where 1 is argument a, 2 is argument b, etc.
  //     So the first case here, a === [2,4,3], b === [5,6,4], expected === [7,0,8] 
  const cases = [
    [[2,4,3], [5,6,4], [7,0,8]],
    [[9,9,9,9,9,9,9], [9,9,9,9], [8,9,9,9,0,0,0,1]],
    [[9,9,9,9], [9,9,9,9,9,9,9], [8,9,9,9,0,0,0,1]],
    [[0], [0], [0]]
  ];

  test.each(cases)("%p, %p should contain values %p", (a, b, expected) => {
    expect(addTwoNumbers(a, b)).toContainValues(expected);
  });
});
