import { describe, expect, test } from "bun:test";
import getRow from './index';

const cases = [
  [3, [1,3,3,1]],
  [0, [1]],
  [1, [1,1]],
];

describe("pascals-triangle", () => {
  test.each(cases)("numRows=%i) should equal %o", (a, expected) => {
    expect(getRow(a)).toEqual(expected);
  });
});
