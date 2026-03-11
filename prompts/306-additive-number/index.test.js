import { describe, expect, test } from "bun:test";
import isAdditiveNumber from './index';

const cases = [
  ["112358", true],
  ["199100199", true],
  ["199100200", false],
];

describe("additive-number", () => {
  test.each(cases)("(num=%s) should be %s", (a, expected) => {
    expect(isAdditiveNumber(a)).toBe(expected);
  });
});
