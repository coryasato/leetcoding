import { describe, expect, test } from "bun:test";
import countValue from './index';

const cases = [
  [[5,1,5,5,5,null,5], 4],
  [[5,5,5,5,5,null,5], 6],
  [[], 0],
];

describe("count-univalue-subtrees", () => {
  test.each(cases)("arr=%o) should be %p", (a, expected) => {
    expect(countValue(a)).toBe(expected);
  });
});
