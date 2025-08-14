import { describe, expect, test } from "bun:test";
import titleToNumber from './index';

const cases = [
  ['A', 1],
  ['AB', 28],
  ['ZY', 701],
];

describe("excel-sheet-column-number", () => {
  test.each(cases)("columnTitle=%s) should be %i", (a, expected) => {
    expect(titleToNumber(a)).toBe(expected);
  });
});
