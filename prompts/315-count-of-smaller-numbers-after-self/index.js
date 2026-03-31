// 315. Count of Smaller Numbers After Self - https://leetcode.com/problems/count-of-smaller-numbers-after-self/

// Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].

// Example 1:
// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.

// Example 2:
// Input: nums = [-1]
// Output: [0]

// Example 3:
// Input: nums = [-1,-1]
// Output: [0,0]

// NOTE: Quick brute solution.
const _countSmaller = (nums) => {
  const res = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        res[i]++;
      }
    }
  }

  return res;
};

// NOTE: Second attempt. Utilize a cache of seen numbers from right to left.
// This allows us to minimize the looping per entry and visit less items to check
// the current number against.

// NOTE: I still think we can do better by utilizing a precalc'd "previous" count per entry.
// So each entry will have its count and the aggregation of all the lower numbers counts.
// Then we can simply look at the next number below our current number in our cache for
// direct lookup of its count + prevCount. We will need to do some extra work if the current num
// is less then the last overall low, we'd need to re-calc all the current num+1 to the last low for their
// prevCounts.
const countSmaller = (nums) => {
  const res = Array(nums.length).fill(0);
  const cache = new Map();
  let low = Number.MAX_SAFE_INTEGER;

  // Loop backwards so that we can cache seen numbers first.
  for (let i = nums.length-1; i >= 0; i--) {
    const num = nums[i];
    const key = num.toString();

    // Find all seen numbers that are lower than the current num and count their occurance.
    if (cache.size > 0) {
      let counter = num-1;
      let sum = 0;

      while (counter >= low) {
        if (cache.has(counter.toString()) && counter < num) {
          const entry = cache.get(counter.toString());
          sum += entry.count;
        }

        counter--;
      }

      res[i] = sum;
    }

    // Cache all seen numbers and aggregate any reoccuring nums.
    if (cache.has(key)) {
      const entry = cache.get(key);
      cache.set(key, { ...entry, count: entry.count+1 });
    } else {
      cache.set(key, { count: 1 });
    }

    low = Math.min(low, num);
  }

  return res;
};

export default countSmaller;
