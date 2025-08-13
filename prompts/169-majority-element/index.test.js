import { describe, expect, test } from "bun:test";
import majorityElement from './index';

const cases = [
  [[3,2,3], 3],
  [[2,2,1,1,1,2,2], 2],
  [[15,2,5,15,2,15,5], 15],
];

describe("majority-element", () => {
  test.each(cases)("nums=%o) should be %i", (a, expected) => {
    expect(majorityElement(a)).toBe(expected);
  });
});
