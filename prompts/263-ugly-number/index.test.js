import { describe, expect, test } from "bun:test";
import isUgly from './index';

const cases = [
  [6, true],
  [1, true],
  [12, true],
  [14, false],
];

describe("ugly-number", () => {
  test.each(cases)("n=%i) should be %p", (a, expected) => {
    expect(isUgly(a)).toBe(expected);
  });
});
