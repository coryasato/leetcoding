import { describe, expect, test } from "bun:test";
import isMatch from './index';

const cases = [
  ['aa', 'a', false],
  ['aa', '*', true],
  ['cb', '?a', false],
  ['  baaaaaaa', '*?*', true],
  ['  baaaaaaa   ', '*?*', false],
  ['hello wierd', '?*llo *?e?d', true],
];

describe("wildcard-matching", () => {
  test.each(cases)("(str=%s, ptn=%s) should be %p", (a, b, expected) => {
    expect(isMatch(a, b)).toBe(expected);
  });
});
