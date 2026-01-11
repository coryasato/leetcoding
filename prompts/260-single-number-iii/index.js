// 260. Single Number III - https://leetcode.com/problems/single-number-iii/

// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

// Example 1:
// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.

// Example 2:
// Input: nums = [-1,0]
// Output: [-1,0]

// Example 3:
// Input: nums = [0,1]
// Output: [1,0]

// NOTE: A better approach might be to XOR the nums, then do duplicate cancellation on the second loop and assigning two variables to the left over nums.
// However, this also works cause....Javascript :)
const singleNumber = (nums) => {
  let seen = 0;
  let dupes = 0;

  nums.forEach(num => {
    const bit = 1 << num;

    // Since all other integers appear exactly twice, we can be naive and not check if the dupes var already
    // has the bit. If that changed, we would want to conditionally set it.
    if (seen & bit) {
      dupes |= bit;
    } else {
      seen |= bit;
    }
  });

  return nums.filter(num => !(dupes & (1 << num)));
};

export default singleNumber;
