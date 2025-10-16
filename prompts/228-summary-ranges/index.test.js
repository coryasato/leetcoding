import { describe, expect, test } from "bun:test";
import summaryRanges from './index';

const cases = [
  [[0,1,2,4,5,7], ["0->2","4->5","7"]],
  [[0,2,3,4,6,8,9], ["0","2->4","6","8->9"]],
];

describe("summary-ranges", () => {
  test.each(cases)("nums=%o) should equal %o", (a, expected) => {
    expect(summaryRanges(a)).toEqual(expected);
  });
});
