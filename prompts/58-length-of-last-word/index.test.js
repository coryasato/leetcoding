import { describe, expect, test } from "bun:test";
import lengthOfLastWord from './index';

const cases = [
  ["Hello World", 5],
  ["   fly me   to   the moon  ", 4],
  ["luffy is still joyboy", 6],
];

describe("length-of-last-word", () => {
  test.each(cases)("(str=%s) should be %i", (a, expected) => {
    expect(lengthOfLastWord(a)).toEqual(expected);
  });
});
