import { describe, expect, test } from "bun:test";
import MedianFinder from './index';

const cases = [
  [
    [
      ['addNum', 1],
      ['addNum', 2],
      ['findMedian', null],
      ['addNum', 3],
      ['findMedian', null],
    ],
    [
      [1],
      [1,2],
      1.5,
      [1,2,3],
      2.0
    ]
  ],
];

// NOTE: Make sure to call each command method iteratively because of the mutative nature of MedianFinder.
describe("find-median-from-data-stream", () => {
  test.each(cases)("commands=%o) should equal %o", (commands, expected) => {
    const mf = new MedianFinder();

    commands.forEach((command, i) => {
      expect(mf[command[0]](command[1])).toEqual(expected[i]);
    });
  });
});
