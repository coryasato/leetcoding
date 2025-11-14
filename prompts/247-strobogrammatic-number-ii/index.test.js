import { describe, expect, test } from "bun:test";
import isStrobogrammatic2 from './index';

const cases = [
  [2, [ "11", "69", "88", "96" ]],
  [3, [ "101", "111", "181", "609", "619", "689", "808", "818", "888", "906", "916", "986" ]],
  [4, [ "1001", "1111", "1691", "1881", "1961", "6009", "6119", "6699", "6889", "6969", "8008", "8118", "8698", "8888", "8968", "9006", "9116", "9696", "9886", "9966" ]],
];

describe("strobogrammatic-number-ii", () => {
  test.each(cases)("n=%i) should equal %o", (a, expected) => {
    expect(isStrobogrammatic2(a)).toEqual(expected);
  });
});
