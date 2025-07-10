import { describe, expect, test } from "bun:test";
import hasCycle from './index';

const cases = [
  [[3,2,0,-4], 1, true],
  [[1,2], 0, true],
  [[1], -1, false],
];

describe("linked-list-cycle", () => {
  test.each(cases)("arr=%o, pos=%i) should be %p", (a, b, expected) => {
    expect(hasCycle(a, b)).toBe(expected);
  });
});
