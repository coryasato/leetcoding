// 228. Summary Ranges - https://leetcode.com/problems/summary-ranges/

// You are given a sorted unique integer array nums.
// A range [a,b] is the set of all integers from a to b (inclusive).
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
// Each range [a,b] in the list should be output as:
// "a->b" if a != b
// "a" if a == b

// Example 1:
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// Example 2:
// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

// Functional-like solution. This one takes two loops; one for grouping and one for templating.
// It could be cut down to one loop and the templating done in the reduce fn, but it will clutter the logic.
const _summaryRanges = (nums) => {
  return nums.reduce((acc, num) => {
    const last = acc[acc.length-1];

    // Initial seed for the first item, return early.
    if (last.length === 0) {
      acc[acc.length-1] = [num];
      return acc;
    }

    if ((last[0] + 1) === num) {
      acc[acc.length-1] = [last[0], num];
    } else if (last[1] && ((last[1] + 1) === num)) {
      acc[acc.length-1] = [last[0], num];
    } else {
      acc.push([num]);
    }

    return acc;
  }, [ [] ]).map(bucket => (
    bucket.length === 1 ? bucket[0].toString() : `${bucket[0]}->${bucket[1]}`
  ));
};

// O(N) Solution with two pointers.
const summaryRanges = (nums) => {
  const ranges = [];

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    let j = i + 1;
    while (j < nums.length) {
      if ((nums[j - 1]) !== (nums[j] - 1)) break;
      j++;
    }
    j = j - 1;

    if ((j - i) > 0) {
      ranges.push(`${curr}->${nums[j]}`);
    } else {
      ranges.push(curr.toString());
    }
    i = j;
  }

  return ranges;
};

export default summaryRanges;
