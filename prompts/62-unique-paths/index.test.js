import { describe, expect, test } from "bun:test";
import uniquePaths from './index';

const cases = [
  [3, 7, 28],
  [3, 2, 3],
];

describe("unique-paths", () => {
  test.each(cases)("(m=%i, n=%i) should be %i", (a, b, expected) => {
    expect(uniquePaths(a ,b)).toBe(expected);
  });
});
