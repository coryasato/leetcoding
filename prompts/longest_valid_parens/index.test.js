import { describe, expect, test } from "bun:test";
import longestValidParentheses from './index';

const cases = [
  ['(()', 2],
  [')()())', 4],
  ['', 0],
  [')(()()))()', 6],
];

describe("longest_valid_parens", () => {
  test.each(cases)("(str=%s) should equal %p", (a, expected) => {
    expect(longestValidParentheses(a)).toEqual(expected);
  });
});
