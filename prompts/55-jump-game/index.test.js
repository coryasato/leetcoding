import { describe, expect, test } from "bun:test";
import jumpGame from './index';

const cases = [
  [[2, 3, 1, 1, 4], true],
  [[3, 2, 1, 0, 4], false],
];

describe("jump-game", () => {
  test.each(cases)("(nums=%o) should be %p", (a, expected) => {
    expect(jumpGame(a)).toBe(expected);
  });
});

