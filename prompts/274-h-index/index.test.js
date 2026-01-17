import { describe, expect, test } from "bun:test";
import hIndex from './index';

const cases = [
  [[3,0,6,1,5], 3],
  [[1,3,1], 1],
  [[10,8,5,4,3], 4],
  [[25,8,5,3,3], 3],
];

describe("h-index", () => {
  test.each(cases)("citations=%o) should be %i", (a, expected) => {
    expect(hIndex(a)).toBe(expected);
  });
});
