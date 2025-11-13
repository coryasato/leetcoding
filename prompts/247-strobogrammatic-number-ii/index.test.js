import { describe, expect, test } from "bun:test";
import isStrobogrammatic2 from './index';

const cases = [
  [2, [ "11", "69", "88", "96" ]],
  [3, [ "111", "181", "619", "689", "818", "888", "916", "986" ]],
  [4, [ "1111", "1691", "1881", "1961", "6119", "6699", "6889", "6969", "8118", "8698", "8888", "8968", "9116", "9696", "9886", "9966"]],
];

describe("strobogrammatic-number-ii", () => {
  test.each(cases)("n=%i) should equal %o", (a, expected) => {
    expect(isStrobogrammatic2(a)).toEqual(expected);
  });
});
