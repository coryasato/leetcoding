import { describe, expect, test } from "bun:test";
import maxProduct from './index';

const cases = [
  [["abcw","baz","foo","bar","xtfn","abcdef"], 16],
  [["a","ab","abc","d","cd","bcd","abcd"], 4],
  [["a","aa","aaa","aaaa"], 0],
];

describe("maximum-product-of-word-lengths", () => {
  test.each(cases)("(words=%o) should be %i", (a, expected) => {
    expect(maxProduct(a)).toBe(expected);
  });
});
