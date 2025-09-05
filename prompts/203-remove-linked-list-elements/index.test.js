import { describe, expect, test } from "bun:test";
import removeElements from './index';

const cases = [
  [[1,2,6,3,4,5,6], 6, [1,2,3,4,5]],
  [[], 1, []],
  [[7,7,7,7], 7, []],
];

describe("remove-linked-list-elements", () => {
  test.each(cases)("arr=%o, val=%i) should equal %o", (a, b, expected) => {
    expect(removeElements(a, b)).toEqual(expected);
  });
});
