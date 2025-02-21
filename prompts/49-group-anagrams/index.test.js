import { describe, expect, test } from "bun:test";
import groupAnagrams from './index';

const cases = [
  [["eat", "tea", "tan", "ate", "nat", "bat"], [["bat"], ["ate", "eat", "tea"], ["nat", "tan"]]],
  [[""], [[""]]],
  [["a"], [["a"]]],
];

const sortItems = (outerArr) => (outerArr.map(arr => arr.sort()));

describe("group-anagrams", () => {
  test.each(cases)("(arr=%o) should equal array %o", (a, expected) => {
    expect(sortItems(groupAnagrams(a))).toEqual(sortItems(expected));
  });
});
