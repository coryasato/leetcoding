import { describe, expect, test } from "bun:test";
import isIsomorphic from './index';

const cases = [
  ['egg', 'add', true],
  ['foo', 'bar', false],
  ['paper', 'title', true],
];

describe("isomorphic-strings", () => {
  test.each(cases)("s=%s, t=%s) should be %p", (a, b, expected) => {
    expect(isIsomorphic(a, b)).toBe(expected);
  });
});
