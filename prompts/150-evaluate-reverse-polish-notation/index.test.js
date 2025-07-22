import { describe, expect, test } from "bun:test";
import evalRPN from './index';

const cases = [
  [["2","1","+","3","*"], 9],
  [["4","13","5","/","+"], 6],
  [["10","6","9","3","+","-11","*","/","*","17","+","5","+"], 22],
];

describe("evaluate-reverse-polish-notation", () => {
  test.each(cases)("tokens=%o) should be %i", (a, expected) => {
    expect(evalRPN(a)).toEqual(expected);
  });
});
