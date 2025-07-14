import { describe, expect, test } from "bun:test";
import main from './index';

const cases = [
  [
    ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
    [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
    [null, null, 1, null, -1, null, -1, 3, 4],  // NOTE: Removed a null from the start, since Im not returning it for the creation of the class.
  ],
];

describe("word-break", () => {
  test.each(cases)("commands=%o, values=%o) should equal %o", (a, b, expected) => {
    expect(main(a, b)).toEqual(expected);
  });
});
