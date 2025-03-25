import { describe, expect, test } from "bun:test";
import addBinary from './index';

const cases = [
  ['11', '1', '100'],
  ['1010', '1011', '10101'],
  ['000', '000', '000'],
];

describe("add-binary", () => {
  test.each(cases)("(a=%s, b=%s) should be %s", (a, b, expected) => {
    expect(addBinary(a, b)).toBe(expected);
  });
});
