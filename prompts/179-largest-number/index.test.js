import { describe, expect, test } from "bun:test";
import largestNumber from './index';

const cases = [
  [[10,2], "210"],
  [[3,30,34,5,9], "9534330"],
];

describe("largest-number", () => {
  test.each(cases)("nums=%o) should be %s", (a, expected) => {
    expect(largestNumber(a)).toBe(expected);
  });
});
