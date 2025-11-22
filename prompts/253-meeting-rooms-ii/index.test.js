import { describe, expect, test } from "bun:test";
import minMeetingRooms from './index';

const cases = [
  [[[0,30],[5,10],[15,20]], 2],
  [[[7,10],[2,4]], 1],
];

describe("meeting-rooms-ii", () => {
  test.each(cases)("intervals=%o) should be %p", (a, expected) => {
    expect(minMeetingRooms(a)).toBe(expected);
  });
});
