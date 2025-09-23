import { describe, expect, test } from "bun:test";
import findOrder from './index';

const cases = [
  [2, [[1,0]], [0,1]],
  [4, [[1,0],[2,0],[3,1],[3,2]], [0,1,2,3]],
  [1, [], []],
  [4, [[1,0],[2,0],[0,2],[3,2]], []],
];

describe("course-schedule-ii", () => {
  test.each(cases)("(numCourses=%i, prerequisites=%o) should equal %o", (a, b, expected) => {
    expect(findOrder(a, b)).toEqual(expected);
  });
});
