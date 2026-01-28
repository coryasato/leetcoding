import { describe, expect, test } from "bun:test";
import addOperators from './index';

const cases = [
  ["123", 6, ["1+2+3", "1*2*3"]],
  ["232", 8, ["2+3*2", "2*3+2"]],
  ["3456237490", 9191, []],
];

describe("expression-add-operators", () => {
  test.each(cases)("num=%o, target=%i) should equal %o", (a, b, expected) => {
    expect(addOperators(a, b)).toEqual(expected);
  });
});
