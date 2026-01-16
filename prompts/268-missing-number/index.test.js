import { describe, expect, test } from "bun:test";
import missingNumber from './index';

const cases = [
  [[3,0,1], 2],
  [[0,1], 2],
  [[9,6,4,2,3,5,7,0,1], 8],
];

describe("missing-number", () => {
  test.each(cases)("nums=%o) should be %i", (a, expected) => {
    expect(missingNumber(a)).toBe(expected);
  });
});
