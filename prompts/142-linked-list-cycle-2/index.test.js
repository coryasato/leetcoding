import { describe, expect, test } from "bun:test";
import detectCycle from './index';

const cases = [
  [[3,2,0,-4], 1, 2],
  [[1,2], 0, 1],
  [[1], -1, null],
];

describe("linked-list-cycle-2", () => {
  test.each(cases)("arr=%o, pos=%i) should be %p", (a, b, expected) => {
    expect(detectCycle(a, b)).toBe(expected);
  });
});
