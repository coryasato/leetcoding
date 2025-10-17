import { describe, expect, test } from "bun:test";
import majorityElement from './index';

const cases = [
  [[3,2,3], [3]],
  [[1], [1]],
  [[1,2], [1,2]],
];

describe("majority-element-ii", () => {
  test.each(cases)("nums=%o) should equal %o", (a, expected) => {
    expect(majorityElement(a)).toEqual(expected);
  });
});
