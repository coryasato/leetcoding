import { describe, expect, test } from "bun:test";
import reverseWords from './index';

const cases = [
  ["the sky is blue", "blue is sky the"],
  ["  hello world  ", "world hello"],
  ["a good   example", "example good a"],
];

describe("reverse-words-in-a-string", () => {
  test.each(cases)("str=%s) should equal %s", (a, expected) => {
    expect(reverseWords(a)).toEqual(expected);
  });
});
