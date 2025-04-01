import { describe, expect, test } from "bun:test";
import editDistance from './index';

const cases = [
  ['horse', 'ros', 3],
  ['intention', 'execution', 5],
];

describe("edit-distance", () => {
  test.each(cases)("(w1=%s, w2=%s) should be %i", (a, b, expected) => {
    expect(editDistance(a, b)).toBe(expected);
  });
});
