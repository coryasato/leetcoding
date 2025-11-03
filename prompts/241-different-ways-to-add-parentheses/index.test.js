import { describe, expect, test } from "bun:test";
import diffWaysToCompute from './index';

const cases = [
  ["2-1-1", [0,2]],
  ["2*3-4*5", [10,-10,-10,-14,-34]],
];

describe("different-ways-to-add-parentheses", () => {
  test.each(cases)("expression=%s) should equal %o", (a, expected) => {
    expect(diffWaysToCompute(a)).toEqual(expected);
  });
});
