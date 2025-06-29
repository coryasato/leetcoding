import { describe, expect, test } from "bun:test";
import canCompleteCircuit from './index';

const cases = [
  [[1,2,3,4,5], [3,4,5,1,2], 3],
  [[2,3,4], [3,4,3], -1],
];

describe("gas-station", () => {
  test.each(cases)("gas=%o, cost=%o) should equal %i", (a, b, expected) => {
    expect(canCompleteCircuit(a, b)).toEqual(expected);
  });
});
