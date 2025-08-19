import { describe, expect, test } from "bun:test";
import findRepeatedDnaSequences from './index';

const cases = [
  ["AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", ["AAAAACCCCC","CCCCCAAAAA"]],
  ["AAAAAAAAAAAAA", ["AAAAAAAAAA"]],
];

describe("repeated-dna-sequences", () => {
  test.each(cases)("s=%s) should equal %o", (a, expected) => {
    expect(findRepeatedDnaSequences(a)).toEqual(expected);
  });
});
