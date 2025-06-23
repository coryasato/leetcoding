// 128. Longest Consecutive Sequence - https://leetcode.com/problems/longest-consecutive-sequence/

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Example 3:
// Input: nums = [1,0,1,2]
// Output: 3

const longestConsecutive = (nums) => {
  const map = {};

  nums.forEach(num => {
    map[num] = true;
  });

  let maxCount = 0;
  for (const key of Object.keys(map)) {
    const num = parseInt(key, 10);

    if (!(num - 1).toString() in map === false) {
      let count = 1;
      let nextNum = (num + 1).toString();

      while (nextNum in map) {
        count++;
        nextNum = (parseInt(nextNum) + 1).toString();
      }

      maxCount = Math.max(maxCount, count);
    }
  }

  return maxCount;
};

export default longestConsecutive;
