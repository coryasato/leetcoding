import { describe, expect, test } from "bun:test";
import grayCode from './index';

const cases = [
  [2, [0,1,3,2]],
  [1, [0,1]],
];

describe("gray-code", () => {
  test.each(cases)("(n=%i) should equal %o", (a, expected) => {
    expect(grayCode(a)).toEqual(expected);
  });
});
