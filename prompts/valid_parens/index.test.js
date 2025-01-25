import { describe, expect, test } from "bun:test";
import isValid from './index';

const cases = [
  ['()', true],
  ['()[]{}', true],
  ['(]', false],
  ['([])', true],
  ['{([{({[]})}])}', true],
  ['{([{({[]])}])}', false],
];

describe("remove_nth_node", () => {
  test.each(cases)("%p should be %p", (a, expected) => {
    expect(isValid(a)).toBe(expected);
  });
});
