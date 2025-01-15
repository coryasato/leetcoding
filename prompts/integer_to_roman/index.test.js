import { describe, expect, test } from "bun:test";
import intToRoman from './index';

const cases = [
  [3749, 'MMMDCCXLIX'],
  [58, 'LVIII'],
  [1994, 'MCMXCIV'],
];

describe("integer_to_roman", () => {
  test.each(cases)("%p should contain values %p", (a, expected) => {
    expect(intToRoman(a)).toBe(expected);
  });
});
