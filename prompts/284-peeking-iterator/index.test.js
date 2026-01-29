import { describe, expect, test } from "bun:test";
import PeekingIterator from './index';

const cases = [
  [
    [1,2,3],
    [
      ['next', 1],
      ['peek', 2],
      ['next', 2],
      ['next', 3],
      ['hasNext', false],
    ]
  ],
];

describe("peeking-iterator", () => {
  test.each(cases)("iterator=%o) should expect commands to be %o", (a, commands) => {
    const pi = new PeekingIterator(a);

    commands.forEach((tuple, i) => {
      expect(pi[tuple[0]]()).toBe(tuple[1]);
    });
  });
});
