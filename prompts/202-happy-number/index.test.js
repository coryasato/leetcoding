import { describe, expect, test } from "bun:test";
import isHappy from './index';

const cases = [
  [19, true],
  [2, false],
];

describe("happy-number", () => {
  test.each(cases)("num=%i) should be %p", (a, expected) => {
    expect(isHappy(a)).toBe(expected);
  });
});
