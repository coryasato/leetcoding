import { describe, expect, test } from "bun:test";
import isInterleave from './index';

const cases = [
  ["aabcc", "dbbca", "aadbbcbcac", true],
  ["aabcc", "dbbca", "aadbbbaccc", false],
  ["", "", "", true],
];

describe("interleaving-string", () => {
  test.each(cases)("s1=%s, s2=%s, s3=%s) should equal %p", (a, b, c, expected) => {
    expect(isInterleave(a, b, c)).toEqual(expected);
  });
});
