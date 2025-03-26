import { describe, expect, test } from "bun:test";
import fullJustify from './index';

const cases = [
  [
    ["This", "is", "an", "example", "of", "text", "justification."], 16,
      [
        "This    is    an",
        "example  of text",
        "justification.  ",
      ]
    ],
    [
      ["What","must","be","acknowledgment","shall","be"], 16,
      [
        "What   must   be",
        "acknowledgment  ",
        "shall be        ",
      ],
    ],
    [
      ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20,
      [
        "Science  is  what we",
        "understand      well",
        "enough to explain to",
        "a  computer.  Art is",
        "everything  else  we",
        "do                  "
      ]
    ],
];

describe("unique-paths", () => {
  test.each(cases)("(words=%o, maxWidth=%i) should equal %o", (a, b, expected) => {
    expect(fullJustify(a, b)).toEqual(expected);
  });

  test('should NOT equal the output when the whitespace is incorrect', () => {
    expect(fullJustify(cases[0][0], cases[0][1])).not.toEqual(cases[0][2].map(s => s.trim()));
  });
});
