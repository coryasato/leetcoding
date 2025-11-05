import { describe, expect, test } from "bun:test";
import shortestDistance from './index';

const cases = [
  [["practice", "makes", "perfect", "coding", "makes"], "coding", "practice", 3],
  [["practice", "makes", "perfect", "coding", "makes"], "makes", "coding", 1],
];

describe("shortest-word-distance", () => {
  test.each(cases)("wordDict=%o, word1=%s, word2=%s) should be %i", (a, b, c, expected) => {
    expect(shortestDistance(a,b,c)).toBe(expected);
  });
});
