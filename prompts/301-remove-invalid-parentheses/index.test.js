import { describe, expect, test } from "bun:test";
import removeInvalidParentheses from './index';

const cases = [
  ["()())()", ["(())()","()()()"]],
  ["(a)())()", ["(a())()","(a)()()"]],
  [")(", [""]],
];

describe("remove-invalid-parentheses", () => {
  test.each(cases)("(s=%s) should equal %o", (a, expected) => {
    expect(removeInvalidParentheses(a)).toEqual(expected);
  });
});
