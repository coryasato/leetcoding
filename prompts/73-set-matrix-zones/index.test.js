import { describe, expect, test } from "bun:test";
import setZeroes from './index';

const cases = [
  [ [[1,1,1],[1,0,1],[1,1,1]], [[1,0,1],[0,0,0],[1,0,1]] ],
  [ [[0,1,2,0],[3,4,5,2],[1,3,1,5]], [[0,0,0,0],[0,4,5,0],[0,3,1,0]] ],
];

describe("set-matrix-zones", () => {
  test.each(cases)("(w1=%o) should equal %o", (a, expected) => {
    expect(setZeroes(a)).toEqual(expected);
  });
});
