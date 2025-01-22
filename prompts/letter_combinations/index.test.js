import { describe, expect, test } from "bun:test";
import letterCombinations from './index';

const cases = [
  ['23', ["ad","ae","af","bd","be","bf","cd","ce","cf"]],
  ['', []],
  ['2', ["a","b","c"]],
  ['678', ["mpt", "mpu", "mpv", "mqt", "mqu", "mqv", "mrt", "mru", "mrv", "mst", "msu", "msv", "npt", "npu", "npv", "nqt", "nqu", "nqv", "nrt", "nru", "nrv", "nst", "nsu", "nsv", "opt", "opu", "opv", "oqt", "oqu", "oqv", "ort", "oru", "orv", "ost", "osu", "osv"]],
];

describe("letter_combinations", () => {
  test.each(cases)("%p should contain values %p", (a, expected) => {
    expect(letterCombinations(a)).toContainValues(expected);
  });
});
