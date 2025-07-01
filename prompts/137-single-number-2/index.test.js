import { describe, expect, test } from "bun:test";
import singleNumber from './index';

const cases = [
  [[2,2,3,2], 3],
  [[0,1,0,1,0,1,99], 99],
  [[0,-12,0,-12,0,100,-12], 100],
];

describe("single-number", () => {
  test.each(cases)("nums=%o) should be %i", (a, expected) => {
    expect(singleNumber(a)).toBe(expected);
  });
});
