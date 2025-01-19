// 3Sum - https://leetcode.com/problems/3sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// This debug version helps visualize what the while loop is doing.
// Essentially its going through each combinatory pattern building out a 2-d array:
// [
//  [0,1,2], [0,1,3], [0,1,4], [0,1,5]
//  [0,2,3], [0,2,4], [0,2,5]
//  [0,3,4], [0,3,5]
//  [0,4,5]
//  ...etc
// ]
const threeSumDebug = (nums) => {
  // Short circuit the fn if we only have 3 items.
  if (nums.length === 3) {
    return ((nums[0] + nums[1] + nums[2]) === 0) ? [nums] : [];
  }

  const HARD_STOP = nums.length * nums.length;
  const endIdx = nums.length - 1;
  const results = {
    answer: []
  };

  let count = 0;
  let entries = [];

  let left = 0;
  let mid = 1;
  let right = 2;

  while (count <= HARD_STOP) {
    const entry = [left, mid, right];
    entries.push(entry);

    const a = nums[left];
    const b = nums[mid];
    const c = nums[right];

    // If we have a matching sum of 0, sort the values then "hash" the values as a string.
    // We use that for unique keys in the results object to avoid having to dedupe the final array.
    // The results.answer array is again a short cut so we don't have to map over the object for its values.
    if (a + b + c === 0) {
      const arr = [a, b, c].sort((a, b) => a - b);
      const hash = arr.join('_');

      if (!results.hasOwnProperty(hash)) {
        results[hash] = arr;
        results.answer.push(arr);
      }
    }

    // End the loop as there are only 3 items left in the array.
    if (left === (endIdx - 2)) {
      break;
    }

    // The right cursor hit the end of the nums array, we need to shift the counters to start the next loop.
    if (right === endIdx) {
      // End of a full index group, move left forward, move mid ahead of new left and right ahead of new mid.
      if (mid === (right - 1)) {
        left = left + 1;
        mid = left + 1;
        right = mid + 1;
      } else {
        // End of an mid group, move mid & right forward,.
        mid = mid + 1;
        right = mid + 1;
      }
    } else {
      right = right + 1;
    }

    count++;  // The count + HARD_STOP is just a precaution.
  }

  console.log(entries);  // To double check the combinations via the loop are correct.
  return results.answer;
};

// MAIN FN
// Instead of nested loops, this attempt is to use a while loop and pointers to travel the combinations of indexes.
// The results object is to reduce another sweep for array uniqueness by leveraging unique hash keys based on the index values.
// The sort and join methods are likely slowing things down and could be replaced by hashing and sorting helper function where
// it checks the order and builds the string manually, since there are only 3 items, it wouldn't be too terrible.

// We could also acheive this by a nested O(n^2) loop, bubblesort-like.

// https://www.bigocalc.com - The time complexity of the `threeSum` function is O(n^2), and the space complexity is O(n)
const threeSum = (nums) => {
  // Short circuit the fn if we only have 3 items.
  if (nums.length === 3) {
    return ((nums[0] + nums[1] + nums[2]) === 0) ? [nums] : [];
  }

  const HARD_STOP = nums.length * nums.length;
  const endIdx = nums.length - 1;
  const results = {
    answer: []
  };

  let count = 0;
  let left = 0;
  let mid = 1;
  let right = 2;

  while (count <= HARD_STOP) {
    const a = nums[left];
    const b = nums[mid];
    const c = nums[right];

    if (a + b + c === 0) {
      const arr = [a, b, c].sort((a, b) => a - b);
      const hash = arr.join('_');

      if (!results.hasOwnProperty(hash)) {
        results[hash] = arr;
        results.answer.push(arr);
      }
    }

    if (left === (endIdx - 2)) {  // End the loop as there are only 3 items left in the array.
      break;
    }

    if (right === endIdx) {
      if (mid === (right - 1)) {  // End of a full index group, move left forward, move mid ahead of new left and right ahead of new mid.
        left = left + 1;
        mid = left + 1;
        right = mid + 1;
      } else {                    // End of an mid group, move mid & right forward,.
        mid = mid + 1;
        right = mid + 1;
      }
    } else {
      right = right + 1;
    }

    count++;                     // The count + HARD_STOP is just a precaution.
  }

  return results.answer;
};

export default threeSum;
