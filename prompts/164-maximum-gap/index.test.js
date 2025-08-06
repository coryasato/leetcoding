import { describe, expect, test } from "bun:test";
import maximumGap from './index';

const cases = [
  [[3,6,9,1], 3],
  [[10], 0],
];

describe("maximum-gap", () => {
  test.each(cases)("nums=%o) should be %i", (a, expected) => {
    expect(maximumGap(a)).toBe(expected);
  });
});
