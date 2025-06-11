import { describe, expect, test } from "bun:test";
import connect from './index';

const cases = [
  [[1,2,3,4,5,6,7], [1,'#',2,3,'#',4,5,6,7,'#']],
  [[], []],
];

describe("populating-next-right-pointers-in-each-node", () => {
  test.each(cases)("arr=%o) should equal %o", (a, expected) => {
    expect(connect(a)).toEqual(expected);
  });
});
