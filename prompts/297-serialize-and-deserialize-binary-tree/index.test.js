import { describe, expect, test } from "bun:test";
import { deserialize, serialize } from './index';

const cases = [
  [[1,2,3,null,null,4,5], [1,2,3,null,null,4,5]],
  [[], []],
];

describe("serialize-and-deserialize-binary-tree", () => {
  test('deserialize should return an array', () => {
    expect(deserialize('')).toBeArray();
    expect(deserialize('1')).toEqual([1]);
  });

  test('serialize should return a string', () => {
    expect(serialize([])).toBeString();
    expect(serialize([1])).toBe('1');
  });

  test.each(cases)("(arr=%o) should equal %o", (a, expected) => {
    expect(deserialize(serialize(a))).toEqual(expected);
  });
});
