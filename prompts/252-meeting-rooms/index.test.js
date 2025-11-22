import { describe, expect, test } from "bun:test";
import canAttendMeetings from './index';

const cases = [
  [[[0,30],[5,10],[15,20]], false],
  [[[5,8],[9,15]], true],
];

describe("meeting-rooms", () => {
  test.each(cases)("intervals=%o) should be %p", (a, expected) => {
    expect(canAttendMeetings(a)).toBe(expected);
  });
});
