import { describe, expect, test } from "bun:test";
import shortestWordDistance from './index';

const cases = [
  [["practice", "makes", "perfect", "coding", "makes"], "makes", "coding", 1],
  [["practice", "makes", "perfect", "coding", "makes"], "makes", "makes", 3],
  [["a", "b", "d", "a", "b", "d", "a", "c", "a"], "a", "a", 2],
];

describe("shortest-word-distance-iii", () => {
  test.each(cases)("wordDict=%o, word1=%s, word2=%s) should be %i", (a, b, c, expected) => {
    expect(shortestWordDistance(a, b, c)).toBe(expected);
  });
});
