// 60. Permutation Sequence - https://leetcode.com/problems/permutation-sequence

// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Example 1:
// Input: n = 3, k = 3
// Output: "213"

// Example 2:
// Input: n = 4, k = 9
// Output: "2314"

// Example 3:
// Input: n = 3, k = 1
// Output: "123"

const getPermutation = (n, k) => {
  const nums = Array.from(new Array(n).keys(), (n) => (n + 1));
  const permute = (iter, arr=[]) => {
    if (iter.length === 0) return [[]];

    for (let i = 0; i < iter.length; i++) {
      const remaining = iter.slice(0, i).concat(iter.slice(i + 1));
      const perms = permute(remaining);

      for (const perm of perms) {
        arr.push([iter[i], ...perm]);
      }
    }

    return arr;
  };

  return permute(nums)[k-1].join('');
};

export default getPermutation;
