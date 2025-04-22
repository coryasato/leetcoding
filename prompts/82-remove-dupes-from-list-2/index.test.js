import { describe, expect, test } from "bun:test";
import deleteDuplicates from './index';

const cases = [
  [[1,2,3,3,4,4,5], [1,2,5]],
  [[1,1,1,2,3], [2,3]],
  [[1,1,1,2,3,3], [2]],
];

describe("remove-dupes-from-list-2", () => {
  test.each(cases)("(arr=%o) should equal %o", (a, expected) => {
    expect(deleteDuplicates(a)).toEqual(expected);
  });
});
