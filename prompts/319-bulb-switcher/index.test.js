import { describe, expect, test } from "bun:test";
import bulbSwitch from './index';

const cases = [
  [3, 1],
  [0 ,0],
  [1, 1],
];

describe("bulb-switcher", () => {
  test.each(cases)("(n=%i) should be %i", (a, expected) => {
    expect(bulbSwitch(a)).toBe(expected);
  });
});
