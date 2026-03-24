// 312. Burst Balloons - https://leetcode.com/problems/burst-balloons/

// You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.

// If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.

// Return the maximum coins you can collect by bursting the balloons wisely.

// Example 1:
// Input: nums = [3,1,5,8]
// Output: 167
// Explanation:
// nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
// coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167

// Example 2:
// Input: nums = [1,5]
// Output: 10

import permutations from "../../helpers/perm-generator";

// NOTE: Quick and dirty O(n2) that naively finds the best score per loop determining on how many "1"s
// surround a particular index. For each loop, the index with the lowest "1"s in its product will be
// weighted as the best possible index to take.
const _maxCoins = (nums) => {
  let sum = 0;
  let balloons = nums;

  while (balloons.length > 0) {
    let bestBalloon = null;

    balloons.forEach((balloon, i) => {
      const score = (balloons[i-1] || 1) * balloon * (balloons[i+1] || 1);
      const oneAmt = [(balloons[i-1] || 1), balloon, (balloons[i+1] || 1)].reduce((acc, n) => n === 1 ? (acc+1) : acc, 0);
      const currBalloonMemo = { idx: i, oneAmt, score };

      if (bestBalloon === null) {
        bestBalloon = currBalloonMemo;
      } else if (currBalloonMemo.oneAmt < bestBalloon.oneAmt) {
        bestBalloon = currBalloonMemo;
      }
    });

    sum += bestBalloon.score;
    balloons = balloons.slice(0, bestBalloon.idx).concat(balloons.slice(bestBalloon.idx+1));
  }

  return sum;
};

// NOTE: Second solution.
// Gather all permutations of indices and sum their postions. This calculates every possible orientation.
const maxCoins = (nums) => {
  const idxs = Array.from(Array(nums.length), (_, i) => i);
  let maxSum = 0;

  for (const perm of permutations(idxs)) {
    let offset = 0;
    let numsCopy = [...nums];
    let sum = 0;

    for (let i = 0; i < perm.length; i++) {
      const idx = Math.max(perm[i] - offset, 0);
      const score = (numsCopy[idx-1] || 1) * numsCopy[idx] * (numsCopy[idx+1] || 1);

      sum += score;
      numsCopy = numsCopy.slice(0, idx).concat(numsCopy.slice(idx+1));
      offset++;
    }

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};

export default maxCoins;
