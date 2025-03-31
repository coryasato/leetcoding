import { describe, expect, test } from "bun:test";
import simplifyPath from './index';

const cases = [
  ["/home/", "/home"],
  ["/home//foo/", "/home/foo"],
  ["/home/user/Documents/../Pictures", "/home/user/Pictures"],
  ["/../", "/"],
  ["/.../a/../b/c/../d/./", "/.../b/d"],
];

describe("simplify-path", () => {
  test.each(cases)("(path=%s) should be %s", (a, expected) => {
    expect(simplifyPath(a)).toBe(expected);
  });
});
