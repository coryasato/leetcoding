import { describe, expect, test } from "bun:test";
import calculate from './index';

const cases = [
  ["1 + 1", 2],
  [" 2-1 + 2 ", 3],
  ["(1+(4+5+2)-3)+(6+8)", 23],
];

describe("basic-calculator", () => {
  test.each(cases)("s=%s) should be %i", (a, expected) => {
    expect(calculate(a)).toBe(expected);
  });
});
