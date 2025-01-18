import { describe, expect, test } from "bun:test";
import longestCommonPrefix from './index';

const cases = [
  [["flower","flow","flight"], 'fl'],
  [["dog","racecar","car"], ''],
  [["david bowie","david bowy","david bowee"], 'david bow'],
  [["flow","flower","flowight"], 'flow'],
];

describe("longest_common_prefix", () => {
  test.each(cases)("%p should contain values %p", (a, expected) => {
    expect(longestCommonPrefix(a)).toBe(expected);
  });
});
