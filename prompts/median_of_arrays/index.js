/**
 * Median of Two Sorted Arrays - https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. 
 * The overall run time complexity should be O(log (m+n)).
 * Example 1:

    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.

    Example 2:

    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */

// NOTE: This is NOT O(log (m+n)) because of the sort() method.
const slowMedOfArrays = (n1, n2) => {
  const n3 = n1.concat(n2).sort();
  const medianIdx = Math.floor(n3.length / 2);

  // If the array is not even in length, pluck the middle index as your answer.
  if (!(n3.length % 2 === 0)) return n3[medianIdx];

  // If even in length, add the two middle integers together and divide by 2.
  return (( n3[medianIdx-1] + n3[medianIdx] ) / 2);
};

// TODO: Create a faster function and learn how to do Time measurements in Bun tests. 
// Then test both and spit the result in the console.

console.log(slowMedOfArrays([1,3], [2]));
console.log(slowMedOfArrays([1,2], [3,4]));