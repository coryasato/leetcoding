import { describe, expect, test } from "bun:test";
import isMatch from './index';

const cases = [
  ['aa', 'a', false],
  ['aa', 'a*', true],
  ['ab', '.*', true],
  ['abbbbbbc', 'ab*c*', true],
  ['ab', 'abc', false]
];

describe("reg_ex_matching", () => {
  test.each(cases)("%p should contain values %p", (a, b, expected) => {
    expect(isMatch(a, b)).toBe(expected);
  });
});
