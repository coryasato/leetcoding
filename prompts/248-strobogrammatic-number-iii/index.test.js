import { describe, expect, test } from "bun:test";
import isStrobogrammatic3 from './index';

const cases = [
  ["50", "100", 3],
  ["0", "10", 3],
  ["10", "20", 1],
  ["100", "1000", 12],
  ["888", "889", 1],
];

describe("strobogrammatic-number-iii", () => {
  test.each(cases)("low=%s, high=%s) should be %i", (a, b, expected) => {
    expect(isStrobogrammatic3(a, b)).toBe(expected);
  });
});
