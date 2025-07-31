import { describe, expect, test } from "bun:test";
import minStack from './index';

const cases = [
  [[["push", -2],["push", 0],["push", -3],["getMin"],["pop"],["top"],["getMin"]], [null,null,null,-3,null,0,-2]],
  [[["push", -3],["push", -1],["push", -2],["getMin"],["pop"],["top"],["getMin"]], [null,null,null,-3,null,-1,-3]],
];

describe("sort-list", () => {
  test.each(cases)("commands=%o) should equal %o", (commands, expected) => {
    const stack = new minStack();
    expect(commands.map(command => stack[command[0]](command[1]))).toEqual(expected);
  });
});
