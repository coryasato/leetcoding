import { describe, expect, test } from "bun:test";
import minWindow from './index';

const cases = [
  ['ADOBECODEBANC', 'ABC', 'BANC'],
  ['a', 'a', 'a'],
  ['a', 'aa', ''],
  ['amazongiza', 'azi', 'iza'],
];

describe("minimum-string-window", () => {
  test.each(cases)('(s=%s, t=%s) should be %s', (a, b, expected) => {
    expect(minWindow(a, b)).toBe(expected);
  });
});
