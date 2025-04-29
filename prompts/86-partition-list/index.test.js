import { describe, expect, test } from "bun:test";
import partitionList from './index';

const cases = [
  [[1,4,3,2,5,2], 3],
  [[1,2], 2],
];

describe("partition-list", () => {
  test.each(cases)("(arr=%o, x=%i) should be %o", (a, b, expected) => {
    expect(partitionList(a, b)).toBe(expected);
  });
});
