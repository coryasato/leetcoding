import { describe, expect, test } from "bun:test";
import findSubstring from './index';

const cases = [
  ["barfoothefoobarman", ["foo","bar"], [0,9]],
  ["wordgoodgoodgoodbestword", ["word","good","best","word"], []],
  ["barfoofoobarthefoobarman", ["bar","foo","the"], [6,9,12]],
];

describe("substring_with_concat::findSubstring", () => {
  test.each(cases)("(s=%p, words=%o) should contain all values %o", (a, b, expected) => {
    if (expected.length === 0) {
      expect(findSubstring(a, b)).toEqual(expected);
    } else {
      expect(findSubstring(a, b)).toContainAllValues(expected);
    }
  });
});
