import { describe, expect, test } from "bun:test";
import fractionToDecimal from './index';

const cases = [
  [1, 2, '0.5'],
  [2, 1, '2'],
  [4, 333, '0.012'],
];

describe("fraction-to-recurring-decimal", () => {
  test.each(cases)("numerator=%i, denominator=%i) should equal %s", (a, b, expected) => {
    expect(fractionToDecimal(a, b)).toEqual(expected);
  });
});
