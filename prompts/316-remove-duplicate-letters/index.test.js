import { describe, expect, test } from "bun:test";
import removeDuplicateLetters from './index';

const cases = [
  ['bcabc', 'abc'],
  ['cbacdcbc', 'acdb'],
];

describe("remove-duplicate-letters", () => {
  test.each(cases)("(s=%s) should be %s", (a, expected) => {
    expect(removeDuplicateLetters(a)).toBe(expected);
  });
});
