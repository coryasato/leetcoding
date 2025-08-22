import { describe, expect, test } from "bun:test";
import reverseBits from './index';

const cases = [
  [43261596, 964176192],
  [2147483644, 1073741822],
];

describe("reverse-bits", () => {
  test.each(cases)("n=%i) should be %i", (a, expected) => {
    expect(reverseBits(a)).toBe(expected);
  });
});
