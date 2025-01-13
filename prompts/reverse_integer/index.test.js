import { describe, expect, test } from "bun:test";
import reverseInteger from './index';

const cases = [
  [123, 321],
  [-123, -321],
  [120, 21],
  [1234567899, 0],
  [-1234567892, 0],
];

describe("reverseInteger", () => {
  test.each(cases)("%p should contain values %p", (a, expected) => {
    expect(reverseInteger(a)).toBe(expected);
  });
});
