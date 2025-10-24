import { describe, expect, test } from "bun:test";
import deleteNode from './index';

const cases = [
  [[4,5,1,9], 5, [4,1,9]],
  [[4,5,1,9], 1, [4,5,9]],
];

describe("delete-node-in-a-linked-list", () => {
  test.each(cases)("arr=%o, node=%i) should equal %o", (a, b, expected) => {
    expect(deleteNode(a,b)).toEqual(expected);
  });
});
