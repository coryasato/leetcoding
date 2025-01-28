import { describe, expect, test } from "bun:test";
import generateParens from './index';

const cases = [
  [3, ["((()))","(()())","(())()","()(())","()()()"]],
  [1, ["()"]],
];

describe("generate_parens", () => {
  test.each(cases)("%p should contain values %p", (a, expected) => {
    expect(generateParens(a)).toContainAllValues(expected);
  });
});
