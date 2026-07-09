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

/**
 * https://www.bigocalc.com/
 * The time complexity of this function is O(n log n), where n is the total number of elements in both input arrays combined. 
 * This is because the function first concatenates the two input arrays, which takes O(n) time, and then sorts the concatenated 
 * array using a comparison-based sorting algorithm like quicksort or mergesort, which takes O(n log n) time.
 * 
 * The space complexity of this function is O(n), where n is the total number of elements in both input arrays combined. 
 * This is because the function creates a new array by concatenating the two input arrays, which takes up O(n) space. 
 * Additionally, the function creates a new variable to store the index of the median element, which takes up O(1) space.
 */
export const slowMedOfArrays = (n1, n2) => {
  const n3 = n1.concat(n2).sort();
  const medianIdx = Math.floor(n3.length / 2);

  // If the array is not even in length, pluck the middle index as your answer.
  if (!(n3.length % 2 === 0)) return n3[medianIdx];

  // If even in length, add the two middle integers together and divide by 2.
  return ((n3[medianIdx-1] + n3[medianIdx]) / 2);
};

/**
 * https://www.bigocalc.com/
 * The time complexity of this function is O(m + n), where m and n are the lengths of the two input arrays n1 and n2. 
 * This is because we iterate through both arrays once to merge them into a single sorted array.
 * 
 * The space complexity of this function is O(m + n) as well. 
 * This is because we create a new array to store the merged and sorted elements of both input arrays. 
 * The size of this new array will be equal to the sum of the lengths of the two input arrays.
 */
const findMedianSortedArrays = (n1, n2) => {
  const totalLen = n1.length + n2.length;
  const medianIdx = Math.floor(totalLen / 2);
  let sortedArr = [];
  let x = 0;
  let y = 0;

  for (let _i = 0; _i < totalLen; _i++) {
    // If we ran out of things to do on either array, then we can push the remaining items into
    // the sorted array from the unexhausted array. Those items left are all greater than the exhausted array's items.
    if (x > n1.length-1) {
      sortedArr.push(...n2.slice(y));
      break;
    } else if (y > n2.length-1) {
      sortedArr.push(...n1.slice(x));
      break;
    }

    // Use two pointers to determine sorting.
    if (n1[x] > n2[y]) {
      sortedArr.push(n2[y]);
      y++;
    } else {
      sortedArr.push(n1[x]);
      x++;
    }
  }  

  if (totalLen % 2 === 0) {
    return ((sortedArr[medianIdx-1] + sortedArr[medianIdx]) / 2);
  } else {
    return sortedArr[medianIdx];
  }
};

export default findMedianSortedArrays;
