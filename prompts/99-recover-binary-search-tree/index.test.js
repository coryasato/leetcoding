import { describe, expect, test } from "bun:test";
import recoverTree from './index';

const cases = [
  [[1,3,null,null,2], [3,1,null,null,2]],
  [[3,1,4,null,null,2], [2,1,4,null,null,3]],
];

describe("recover-binary-search-tree", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(recoverTree(a)).toEqual(expected);
  });
});
