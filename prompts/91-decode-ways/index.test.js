import { describe, expect, test } from "bun:test";
import numDecodings from './index';

const cases = [
  ['12', 2],
  ['226', 3],
  ['06', 0],
  ['2261012', 6],
  ['2261212', 12],
  ['22102261012', 12],
  ['612', 2],
  ['210', 1],
];

describe("decode-ways", () => {
  test.each(cases)("(s=%s) should be %i", (a, expected) => {
    expect(numDecodings(a)).toBe(expected);
  });
});
