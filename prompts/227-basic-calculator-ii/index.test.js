import { describe, expect, test } from "bun:test";
import calculate from './index';

const cases = [
  ["3+2*2", 7],
  ["3/2", 1],
  [" 3+5 / 2 ", 5],
  ["3+ 5/2 + 2", 7],
];

describe("basic-calculator-ii", () => {
  test.each(cases)("s=%s) should be %i", (a, expected) => {
    expect(calculate(a)).toBe(expected);
  });
});
