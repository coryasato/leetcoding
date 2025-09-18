import { describe, expect, test } from "bun:test";
import canFinish from './index';

const cases = [
  [2, [[1,0]], true],
  [2, [[1,0], [0,1]], false],
  [3, [[1,0], [2,1]], true],
  [3, [[1,2], [1,0], [2,1]], false],
  [3, [[2,1], [1,0], [1,2]], false],
  [7, [[3,2], [2,1], [9,7], [4,3], [1,0], [7,4]], true],
];

describe("course-schedule", () => {
  test.each(cases)("numCourses=%i, prerequisites=%o) should be %p", (a, b, expected) => {
    expect(canFinish(a, b)).toBe(expected);
  });
});
