import { describe, expect, test } from "bun:test";
import rotateImage from './index';

const cases = [
  [[[1,2,3],[4,5,6],[7,8,9]], [[7,4,1],[8,5,2],[9,6,3]]],
  [[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]], [[15,13,2,5], [14,3,4,1],[12,6,8,9],[16,7,10,11]]],
];

describe("rotate-image", () => {
  test.each(cases)("(matrix=%o) should equal rotated matrix %o", (a, expected) => {
    expect(rotateImage(a)).toEqual(expected);
  });
});
