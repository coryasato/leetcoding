import { describe, expect, test } from "bun:test";
import candy from './index';

const cases = [
  [[1,0,2], 5],
  [[1,2,2], 4],
];

describe("candy", () => {
  test.each(cases)("ratings=%o) should be %i", (a, expected) => {
    expect(candy(a)).toBe(expected);
  });
});
