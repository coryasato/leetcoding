import { describe, expect, test } from "bun:test";
import hIndex from './index';

const cases = [
  [[0,1,3,5,6], 3],
  [[1,2,100], 2],
  [[1,3,5,5,8,10], 4],
  [[0,0,1,2,3,5,8,25], 3],
  [[0,0,1,2,4,5,8,25], 4],
  [[1,1,3], 1],
];

describe("h-index-ii", () => {
  test.each(cases)("citations=%o) should be %i", (a, expected) => {
    expect(hIndex(a)).toBe(expected);
  });
});
