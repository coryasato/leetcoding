// 274. H-Index - https://leetcode.com/problems/h-index/

// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

// Example 1:
// Input: citations = [3,0,6,1,5]
// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

// Example 2:
// Input: citations = [1,3,1]
// Output: 1

// Wikipedia: https://en.wikipedia.org/wiki/H-index
// The h-index is the largest h such that h articles have at least h citations each.
// For example, if an author has five publications, with 9, 7, 6, 2, and 1 citations (ordered from greatest to least),
// then the author's h-index is 3, because the author has three publications with 3 or more citations.
// However, the author does not have four publications with 4 or more citations.
const hIndex = (citations) => {
  if (citations.length <= 1) return citations.length;

  const sortedCits = [...citations].sort((a, b) => (a > b ? -1 : 0));

  let idx = 1;
  // After we sort from greatest to least citations per paper, once the index of the
  // item (one based indexing, not zero) is less than the citation amount, we have our h-index.
  for (let i = 1; i < sortedCits.length; i++) {
    // NOTE: These variable are not needed, but leaving here to clarify the logic.
    const curr = sortedCits[i];
    const currCitIdx = i + 1;

    if (curr < currCitIdx) {
      break;
    }

    idx++;
  }

  return idx;
};

export default hIndex;
