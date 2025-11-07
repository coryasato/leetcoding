import { describe, expect, test } from "bun:test";
import WordDistance from './index';

const cases = [
  [
    ["hello", "geek", "gfg", "coding", "geek"],
    [["coding", "hello"], ["geek", "coding"]],
    [3,1],
  ],
  [
    ["abc", "def", "ghi", "abc"],
    [["abc", "ghi"], ["abc", "def"]],
    [1,1],
  ],
];

describe("shortest-word-distance-ii", () => {
  test.each(cases)("wordsDict=%o, [[...shortest-method-args]]=%o) should equal %o", (a, b, expected) => {
    const service = new WordDistance(a);
    expect(b.map(args => service.shortest(...args))).toEqual(expected);
  });
});
