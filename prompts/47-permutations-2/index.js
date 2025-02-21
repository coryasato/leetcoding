// 47. Permutations II - https://leetcode.com/problems/permutations-ii/
//
// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
//
// Example 1:
// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
//
// Example 2:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

const permuteUnique = (nums) => {
  const result = {};

  const permute = (arr, curr=[]) => {
    if (arr.length === 0) {
      const key = curr.join('-');
      if (!result.hasOwnProperty(key)) {
        result[key] = curr;
      }
      return;
    }

    arr.forEach((num, i) => {
      permute(
        arr.slice(0, i).concat(arr.slice(i + 1)),
        curr.concat(num)
      );
    });
  };

  permute(nums);
  return Object.values(result);
};

export default permuteUnique;
