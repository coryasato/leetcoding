import { describe, expect, test } from "bun:test";
import cloneGraph from './index';

const cases = [
  [[[2,4],[1,3],[2,4],[1,3]], [[2,4],[1,3],[2,4],[1,3]]],
  [[[]], [[]]],
  [[], []],
];

describe("clone-graph", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(cloneGraph(a)).toEqual(expected);
  });
});
