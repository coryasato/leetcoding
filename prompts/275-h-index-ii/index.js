// 275. H-Index II - https://leetcode.com/problems/h-index-ii/

// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper and citations is sorted in non-descending order, return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

// You must write an algorithm that runs in logarithmic time.

// Example 1:
// Input: citations = [0,1,3,5,6]
// Output: 3
// Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had received 0, 1, 3, 5, 6 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

// Example 2:
// Input: citations = [1,2,100]
// Output: 2

const hIndex = (citations) => {
  if (citations.length <= 1) return citations.length;

  let start = 0;
  let end = citations.length;
  let mid = Math.floor(citations.length / 2);
  let res = -1;

  while (res < 0) {
    if (citations[mid] >= (citations.length - mid) && citations[mid-1] < (citations.length - (mid-1))) {
      res = citations.length - mid;
      break;
    }

    if (citations[mid-1] >= (citations.length - (mid-1))) {
      // Move left
      end = mid;
      mid = mid - Math.floor(citations.slice(start, end).length / 2);
    } else {
      // Move right
      start = mid;
      mid = mid + Math.floor(citations.slice(start, end).length / 2);
    }
  }

  return res;
};

export default hIndex;
