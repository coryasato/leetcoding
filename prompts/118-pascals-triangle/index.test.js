import { describe, expect, test } from "bun:test";
import generate from './index';

const cases = [
  [5, [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]],
  [1, [[1]]],
];

describe("pascals-triangle", () => {
  test.each(cases)("numRows=%i) should equal %o", (a, expected) => {
    expect(generate(a)).toEqual(expected);
  });
});
