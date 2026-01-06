import { describe, expect, test } from "bun:test";
import diffWaysToCompute, { _diffWaysToCompute } from './index';

describe("different-ways-to-add-parentheses", () => {
  describe('diffWaysToCompute', () => {
    const cases = [
      ["2-1-1", [2,0]],
      ["2*3-4*5", [-34,-10,-14,-10,10]],
    ];

    test.each(cases)("expression=%s) should equal %o", (a, expected) => {
      expect(diffWaysToCompute(a)).toEqual(expected);
    });
  });

  describe('_diffWaysToCompute', () => {
    const cases = [
      ["2-1-1", [0,2]],
      ["2*3-4*5", [10,-10,-10,-14,-34]],
    ];

    test.each(cases)("expression=%s) should equal %o", (a, expected) => {
      expect(_diffWaysToCompute(a)).toEqual(expected);
    });
  });
});
