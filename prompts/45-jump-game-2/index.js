// 45. Jump Game II - https://leetcode.com/problems/jump-game-ii/

// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2

const jump = (nums) => {
  if (nums[0] === nums.length) return 1;

  let jumps = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // If the current number and index combined exceeds the length of the array, then we are done jumping.
    if ((nums.length - (i + num)) <= 0) { break; }
    // Increment a jump.
    jumps++;

    let count = 1;
    let largest = 0;
    let jumpTo = 0;

    // Calculate the next best jump forward for the next outer loop.
    // For the current number, loop through all possible indexes that we could jump to and get the largest
    // number for its value and position in the array.
    //
    // Ex: Number of jumps is 3, current index is 0. [3,5,1,1,1,1,1,1,1]  (len: 9)
    //     Index 1 with a value of 5 (1+5), will be a better jump than:
    //     Index 3 with a value of 1 (3+1)
    //     Result: Index 1 of value 5 will allow us to jump further in the next tick than index 3.
    while ((count <= num) && ((i + count) < nums.length)) {
      const next = nums[i + count];

      if ((next + i + count) > largest) {
        largest = (next + i + count);
        jumpTo = i + count;
      }

      count++;
    }
    // Jump forward to the next best index.
    i = jumpTo-1;
  }

  return jumps;
};

export default jump;
