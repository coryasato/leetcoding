import { describe, expect, test } from "bun:test";
import wordPattern from './index';

const cases = [
  ['abba', 'dog cat cat dog', true],
  ['abba', 'dog cat cat fish', false],
  ['aaaa', 'dog cat cat dog', false],
];

describe("word-pattern", () => {
  test.each(cases)("pattern=%s, s=%s) should be %p", (a, b, expected) => {
    expect(wordPattern(a, b)).toBe(expected);
  });
});
