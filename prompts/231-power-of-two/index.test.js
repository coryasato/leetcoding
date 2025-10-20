import { describe, expect, test } from "bun:test";
import kthSmallest from './index';

const cases = [
  [1, true],
  [16, true],
  [3, false],
  [10, false],
  [131072, true],
];

describe("power-of-two", () => {
  test.each(cases)("n=%i) should be %p", (a, expected) => {
    expect(kthSmallest(a)).toBe(expected);
  });
});
