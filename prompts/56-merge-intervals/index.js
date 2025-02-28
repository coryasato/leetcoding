// 6. Merge Intervals -https://leetcode.com/problems/merge-intervals/

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Recursive strategy with mutations. The additional bucket array creates more memory and the shift / unshift slows things down.
// We could do this with a simple while loop as well to reduce complexity and mutate the array in place.
const mergeIntervals = (intervals) => {
  const recurse = (arr, bucket=[]) => {
    if (arr.length <= 1) return bucket.concat(arr);

    const a = arr.shift();
    const b = arr.shift();

    if (a[1] >= b[0]) {
      // If we have an overlap, merge the adjacent arrays and add then back to the queue.
      // We need to check if the next array also overlaps.
      arr.unshift([a[0], b[1]]);
    } else {
      // No overlap. Add the next array back to the queue and push the current array to the bucket.
      arr.unshift(b);
      bucket.push(a);
    }

    return recurse(arr, bucket);
  };

  return recurse(intervals);
};

export default mergeIntervals;
