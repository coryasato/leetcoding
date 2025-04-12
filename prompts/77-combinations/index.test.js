import { describe, expect, test } from "bun:test";
import combine from './index';

const cases = [
  [4, 2, [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]],
  [1, 1, [[1]]],
];

describe("combinations", () => {
  test.each(cases)("n=%i, k=%i) should equal %o", (a, b, expected) => {
    expect(combine(a, b)).toEqual(expected);
  });
});