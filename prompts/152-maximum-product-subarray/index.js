// 152. Maximum Product Subarray - https://leetcode.com/problems/maximum-product-subarray/

// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// NOTE: Recursive solution here is not ideal, but was good for practice.
//
// If I was concerned about speed, I think a while loop with 2 pointers, doing math inline would be best.
// How To: Set up left and right pointers, when the right pointer moves forward, math the product and store
//         its result in a variable. Move the right pointer forward and repeat until the right pointer is
//         done with the current loop, reset product variable for this loop.
//         Move left pointer forward and repeat. Process is complete once left is exhausted.
const maxProduct = (nums) => {
  let res = 0;

  const findSubArrays = (arr, subs=[]) => {
    if (arr.length === 0) {
      // subs will be an array of arrays. Each inner array will be a sub-array.
      // EX: arr= [2,3,-2,4]:
      //     sub = [[ 2, 3, -2 ], [ 4 ]] (is one possiblity),
      //           [[ 2, 3 ], [ -2, 4 ]] (is another).
      subs.forEach(sub => {
        if (sub.length > 1) {
          const product = sub.reduce((acc, n) => acc *= n, 1);
          res = Math.max(res, product);
        }
      });
      return;
    }

    arr.forEach((_, i) => {
      subs.push(arr.slice(0, i+1));
      findSubArrays(arr.slice(i+1), subs);
      subs.pop();
    });
  };

  findSubArrays(nums);
  return res;
};

export default maxProduct;
