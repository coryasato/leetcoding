import { describe, expect, test } from "bun:test";
import convertToTitle from './index';

const cases = [
  [1, 'A'],
  [28, 'AB'],
  [701, 'ZY'],
  [703, 'AAA'],
];

describe("excel-sheet-column-title", () => {
  test.each(cases)("columnNum=%i) should be %p", (a, expected) => {
    expect(convertToTitle(a)).toBe(expected);
  });
});
