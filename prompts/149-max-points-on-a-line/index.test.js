import { describe, expect, test } from "bun:test";
import maxPoints from './index';

const cases = [
  [[[1,1],[2,2],[3,3]], 3],
  [[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]], 4],
  [[[1,1],[2,1],[3,1]], 3],
  [[[1,1],[3,2],[1,4],[5,3],[4,1],[2,3]], 4],  // Shuffled [1,4] to index 2 so that it doesn't match directly in order.

];

describe("max-points-on-a-line", () => {
  test.each(cases)("points=%o) should be %i", (a, expected) => {
    expect(maxPoints(a)).toBe(expected);
  });
});
