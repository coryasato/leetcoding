import { describe, expect, test } from "bun:test";
import { performance } from 'perf_hooks';
import { getPermutationsForArr, heapPermutation } from './permutations';

describe("getPermutationsForArr", () => {
  const cases = [
    [[1,2], [[1,2], [2,1]]],
    [[1,2,3], [[1,2,3], [1,3,2], [2,1,3],[2,3,1],[3,1,2],[3,2,1]]],
  ];

  test.each(cases)("(arr=%o) should equal %o", (a, expected) => {
    expect(getPermutationsForArr(a)).toEqual(expected);
  });
});

describe("heapPermutation", () => {
  const cases = [
    [[1,2], [[1,2], [2,1]]],
    [[1,2,3], [[1,2,3], [2,1,3], [3,1,2],[1,3,2],[2,3,1],[3,2,1]]],
  ];

  test.each(cases)("(arr=%o) should equal %o", (a, expected) => {
    expect(heapPermutation(a)).toEqual(expected);
  });
});

describe('Performance', () => {
  const perf = (fn, size) => {
    const array = Array.from(new Array(size).keys());
    const start = performance.now();
    fn(array);
    const end = performance.now();
    console.log(`✓ ${fn.name} processed ${size} item array in: ${end - start}ms`);
    return end - start;
  };

  test("^", () => {
    expect(true).toBe(true);
    perf(getPermutationsForArr, 5);
    perf(heapPermutation, 5);
  });
});
