import { describe, expect, test } from "bun:test";
import convert from './index';

const cases = [
  ['PAYPALISHIRING', 3, "PAHNAPLSIIGYIR"],
  ['PAYPALISHIRING', 4, "PINALSIGYAHRPI"],
] as const;

describe("convert", () => {
  test.each(cases)("%p should contain values %p", (a, b, expected) => {
    expect(convert(a, b)).toBe(expected);
  });
});
