import { describe, expect, test } from "bun:test";
import editDistance, { minDistance } from './index';

const cases = [
  ['horse', 'ros', 3],
  ['intention', 'execution', 5],
  ['tel', 'hello', 3],
  ['', 'world', 5],
];

describe("edit-distance", () => {
  test.each(cases)("(w1=%s, w2=%s) should be %i", (a, b, expected) => {
    expect(editDistance(a, b)).toBe(expected);
  });

});

describe("minDistance (Dynamic Programming Solution)", () => {
  test.each(cases)("(w1=%s, w2=%s) should be %i", (a, b, expected) => {
    expect(minDistance(a, b)).toBe(expected);
  });
});
