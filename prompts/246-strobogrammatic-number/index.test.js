import { describe, expect, test } from "bun:test";
import isStrobogrammatic from './index';

const cases = [
  ['69', true],
  ['88', true],
  ['962', false],
  ['619', true],
  ['9886', true],
  ['98186', true],
  ['98386', false],
];

describe("strobogrammatic-number", () => {
  test.each(cases)("str=%s) should be %p", (a, expected) => {
    expect(isStrobogrammatic(a)).toBe(expected);
  });
});
