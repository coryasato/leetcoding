import { describe, expect, test } from "bun:test";
import partition from './index';

const cases = [
  ['aab', [["a","a","b"],["aa","b"]]],
  ['a', [['a']]],
];

describe("palindrome-partitioning", () => {
  test.each(cases)("s=%s) should equal %o", (a, expected) => {
    expect(partition(a)).toEqual(expected);
  });
});
