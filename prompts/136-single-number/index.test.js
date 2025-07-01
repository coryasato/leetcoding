import { describe, expect, test } from "bun:test";
import singleNumber from './index';

const cases = [
  [[2,2,1], 1],
  [[4,1,2,1,2], 4],
  [[1], 1],
];

describe("single-number", () => {
  test.each(cases)("nums=%o) should be %i", (a, expected) => {
    expect(singleNumber(a)).toBe(expected);
  });
});
