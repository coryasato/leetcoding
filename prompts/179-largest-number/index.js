// 179. Largest Number - https://leetcode.com/problems/largest-number/

// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

// Example 1:
// Input: nums = [10,2]
// Output: "210"

// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"

const largestNumber = (nums) => {
  let res = BigInt(-1);

  const permute = (arr) => {
    if (arr.length === 0) return [arr];

    const permutations = [];
    arr.forEach((item, i) => {
      const rest = arr.slice(0, i).concat(arr.slice(i + 1));
      const perms = permute(rest);

      for (const perm of perms) {
        const entry = [item, ...perm];
        permutations.push(entry);

        // Calculate the final permutations on the fly.
        // Utilize BigInts for the contraint where nums can have 100 items and each item: 0 <= 10^9.
        if (entry.length === nums.length) {
          const bigEntryInt = BigInt(entry.join(''));
          res = res > bigEntryInt ? res : bigEntryInt;
        }
      }
    });

    return permutations;
  };

  permute(nums);
  return res.toString();
};

export default largestNumber;
