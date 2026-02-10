import { describe, expect, test } from "bun:test";
import canWinNim from './index';

const cases = [
  [4, false],
  [1, true],
  [2, true],
];

describe("nim-game", () => {
  test.each(cases)("(n=%i) should be %p", (a, expected) => {
    expect(canWinNim(a)).toBe(expected);
  });
});
