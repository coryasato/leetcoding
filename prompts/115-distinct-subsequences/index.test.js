import { describe, expect, test } from "bun:test";
import numDistinct from './index';

const cases = [
  ['rabbbit', 'rabbit', 3],
  ['babgbag', 'bag', 5],
];

describe("distinct-subsequences", () => {
  test.each(cases)("s=%s, t=%s) should be %i", (a, b, expected) => {
    expect(numDistinct(a, b)).toBe(expected);
  });
});
