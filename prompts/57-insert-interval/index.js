// 57. Insert Interval - https://leetcode.com/problems/insert-interval/

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.
// You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.
// Note that you don't need to modify intervals in-place. You can make a new array and return it.

// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// Decided to do the modifications in place for efficiency. The code doesn't suffer too much from it.
const insertInterval = (intervals, newInterval) => {
  let i = 0;
  let processed = false;

  while(i < intervals.length-1) {
    let curr = intervals[i];

    // If the first newInterval is less than the current last num, we have an overlap.
    // When we find an overlap, we want to use the newInterval only once by marking the "processed" flag.
    if (processed === false && newInterval[0] < curr[1]) {
      intervals[i] = [curr[0], newInterval[1]];
      curr = intervals[i];
      processed = true;
    }

    // If we have a proceeding overlap, process the next array and take the highest right integer from either the current
    // or next array. We then do not need the next array, so remove it and reset the iterator to process the current index again.
    let next = intervals[i+1];
    if (curr[1] >= next[0]) {
      intervals[i] = [curr[0], Math.max(curr[1], next[1])];
      intervals.splice(i+1, 1);
      i--;
    }

    i++;
  }

  return intervals;
};

export default insertInterval;
