import { describe, expect, test } from "bun:test";
import Trie from './index';

const cases = [
  [
    ["insert", "search", "search", "startsWith", "insert", "search"],
    ["apple", "apple", "app", "app", "app", "app"],
    [null, true, false, true, null, true],
  ],
];

describe("implement-trie-prefix-tree", () => {
  test.each(cases)("commands=%o, arguments=%o) should be %p", (a, b, expected) => {
    const tree = new Trie();
    a.forEach((command, i) => {
      expect(tree[command](b[i])).toBe(expected[i]);
    });
  });
});
