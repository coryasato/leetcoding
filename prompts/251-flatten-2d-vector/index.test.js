import { describe, expect, test } from "bun:test";
import Vector2D, { Vector2DWithGenerator } from './index';

const generatorCases = [
  [
    [[1,2],[3],[4]],
    [
      (v, i) => i.next().value,
      (v, i) => i.next().value,
      (v, i) => i.next().value,
      (v, i) => v.hasNext(),
      (v, i) => v.hasNext(),
      (v, i) => i.next().value,
      (v, i) => v.hasNext(),
    ],
    [1,2,3,true,true,4,false]
  ],
  [
    [[1,2],[],[3,4],[],[5]],
    [
      (v, i) => i.next().value,
      (v, i) => i.next().value,
      (v, i) => i.next().value,
      (v, i) => v.hasNext(),
      (v, i) => i.next().value,
      (v, i) => v.hasNext(),
      (v, i) => i.next().value
    ],
    [1,2,3,true,4,true,5]
  ]
];

const cases = [
  [
    [[],[1,2],[],[3],[4]],
    ['next', 'next', 'next', 'hasNext', 'hasNext', 'next', 'hasNext'],
    [1,2,3,true,true,4,false],
  ],
  [
    [[],[],[],[],[]],
    ['hasNext','next', 'hasNext'],
    [false, null, false],
  ]
];

describe("flatten-2d-vector", () => {
  describe("Vector2DWithGenerator", () => {
    test.each(generatorCases)("arr=%o, instructions=%o) should equal %o", (a, b, expected) => {
      const vector = new Vector2DWithGenerator(a);
      const iterator = vector[Symbol.iterator]();

      expect(b.map(instruction => instruction(vector, iterator))).toEqual(expected);
    });
  });

  describe("Vector2D", () => {
    test.each(cases)("arr=%o, instructions=%o) should equal %o", (a, b, expected) => {
      const vector = new Vector2D(a);

      expect(b.map(instruction => vector[instruction]())).toEqual(expected);
    });
  });
});
