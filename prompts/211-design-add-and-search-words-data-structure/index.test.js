import { describe, expect, test } from "bun:test";
import WordDictionary from './index';

const cases = [
  [
    ["addWord","addWord","addWord","search","search","search","search"],
    ["bad","dad","mad","pad","bad",".ad","b.."],
    [null,null,null,false,true,true,true],
  ],
];

describe("design-add-and-search-words-data-structure", () => {
  test.each(cases)("(commands=%o, args=%o) should equal %o", (a, b, expected) => {
    const dict = new WordDictionary();

    a.forEach((command, i) => {
      expect(dict[command](b[i])).toEqual(expected[i]);
    });
  });
});
