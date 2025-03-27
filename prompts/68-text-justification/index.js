// 68. Text Justification - https://leetcode.com/problems/text-justification/

// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// Note:
// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.

// Example 1:
// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

// Example 2:
// Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
// Note that the second line is also left-justified because it contains only one word.

// Example 3:
// Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
// Output:
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]

// NOTES:
// Thoughts on how to make this faster:
// 1.   Do everything in the first loop.
// 1.a. Make a buildSentence function that does what the container.forEach logic is doing. Pass in the all data including an arg for lastWord in words.
// 1.b. When we create a newBucket in the first if statement, call the buildSentence with the current bucket and store the result as a new row in a "results" array var.
// 1.c. Instead of a dict of objects (container), we can just use 1 host object at a time. When we are done building the sentence for the row, overwrite
//      the variable with the new bucket instead of pushing it to a host container. This will reduce space / mem use.
// 1.d. After the first if/else statement, add an additional if (isLastWord), call the buildSentence fn with the variable so the fn knows to pad-right
//      and push the string to the "results" array.
// 1.e. Return the "results" arr.
//
// Result: This will reduce the amount of memory the "container" variable will use down from multiple objects to only one at a time and remove 2 loops.
// Faster: Do not store the words in each bucket, it causes us to use more space via the array. We can build out the sentence string ahead of time
//         and memoize how many words we have inserted. Then we know how many spaces we've used and math out how many spaces left to insert in the final loop
//         to build out the padded sentence.
const fullJustify = (words, maxWidth) => {
  let container = [
    {
      lengthOfWords: 0,
      words: [],
      sentence: '',
    }
  ];

  // Creates a map of "buckets" to memoize the length of each sentence that will be returned as the final result
  // of this function.
  words.forEach(word => {
    const len = word.length;
    const lastBucket = container[container.length-1];
    const spacesToAdd = Math.max(lastBucket.words.length-1, 0) + 1;  // Plus one for this current word

    // Create a new bucket if new entry will overflow the line.
    if ((lastBucket.lengthOfWords + len + spacesToAdd) > maxWidth) {
      container.push({
        lengthOfWords: len,
        words: [word],
        sentence: '',
      });
    } else {
      container[container.length-1] = {
        lengthOfWords: lastBucket.lengthOfWords + len,
        words: lastBucket.words.concat(word),
        sentence: '',
      };
    }
  });

  // Loop through each bucket and math out the padding neccessary, left-most to right.
  // The last bucket should pad right always.
  container.forEach((bucket, i) => {
    let paddingToAdd = maxWidth - bucket.lengthOfWords;

    // The last bucket should pad on the right always. If there is more than one word, substract the amount of space from the
    // right padding that the join method will be adding.
    if (i === container.length-1) {
      bucket.sentence = bucket.words.join(' ').concat(' '.repeat(paddingToAdd - (bucket.words.length-1)));
      return;
    }

    const pocketsLen = bucket.words.length-1;
    const maxPockets = Math.ceil(paddingToAdd / pocketsLen);

    bucket.words.forEach(word => {
      const spaces = Math.min(paddingToAdd, maxPockets);
      bucket.sentence += word.concat(' '.repeat(spaces));
      paddingToAdd -= spaces;
    });
  });

  return container.map(bucket => bucket.sentence);
};

export default fullJustify;
