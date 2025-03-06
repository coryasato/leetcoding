import { describe, expect, test } from "bun:test";
import rotateRight from './index';

const cases = [
  [[1,2,3,4,5], 2, [4,5,1,2,3]],
  [[0,1,2], 4, [2,0,1]],
];

describe("rotate-right", () => {
  test.each(cases)("(h=%o, k=%i) should equal array %o", (a, b, expected) => {
    expect(rotateRight(a, b)).toEqual(expected);
  });
});
