import { describe, expect, test } from "bun:test";
import myAtoi from './index';

const cases = [
  ["42", 42],
  [" -042", -42],
  ["1337c0d3", 1337],
  ["0-1", 0],
];

describe("string_to_int", () => {
  test.each(cases)("%p should contain values %p", (a, expected) => {
    expect(myAtoi(a)).toBe(expected);
  });
});
