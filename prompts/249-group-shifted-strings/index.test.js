import { describe, expect, test } from "bun:test";
import groupStrings from './index';

const cases = [
  [
    ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
    [[ "abc", "bcd", "xyz" ], [ "acef" ], [ "az", "ba" ], [ "a", "z" ]]
  ],
];

describe("group-shifted-strings", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(groupStrings(a)).toEqual(expected);
  });
});
