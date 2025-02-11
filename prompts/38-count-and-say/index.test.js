import { describe, expect, test } from "bun:test";
import countAndSay from './index';

const cases = [
  [4, "1211"],
  [1, "1"],
];

describe("count-and-say", () => {
  test.each(cases)("(int=%i) should be %s", (a, expected) => {
    expect(countAndSay(a)).toEqual(expected);
  });
});
