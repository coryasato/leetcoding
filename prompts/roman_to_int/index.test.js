import { describe, expect, test } from "bun:test";
import romanToInt from './index';

const cases = [
  ['III', 3],
  ['LVIII', 58],
  ['MCMXCIV', 1994],
  ['MMMCMXCIX', 3999],
];

describe("roman_to_int", () => {
  test.each(cases)("%p should contain values %p", (a, expected) => {
    expect(romanToInt(a)).toBe(expected);
  });
});
