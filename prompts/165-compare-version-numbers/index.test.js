import { describe, expect, test } from "bun:test";
import compareVersions from './index';

const cases = [
  ['1.2', '1.10', -1],
  ['1.01', '1.001', 0],
  ['1.0', '1.0.0.0', 0],
  ['1.10', '1.001.0.0', 1],
];

describe("compare-version-numbers", () => {
  test.each(cases)("version1=%s, version2=%s) should equal %p", (a, b, expected) => {
    expect(compareVersions(a, b)).toEqual(expected);
  });
});
