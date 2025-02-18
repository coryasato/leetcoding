// 42. Trapping Rain Water - https://leetcode.com/problems/trapping-rain-water/
//
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
//
// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
//
// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

/**
 * HELPERS
 */
const _countTraps = (section) => {
  // If the section ends with a run off, [3,2,1,2,1,1], then we need to find the last
  // "barrier" if it exists and remove the tail of the array (the run off).
  if (section[0] > section[section.length-1]) {
    let nextTallest = section.length-1;

    for (let i = section.length-1; i > 0; i--) {
      if (section[i] > section[nextTallest]) {
        nextTallest = i;
      }
    }

    section = section.slice(0, nextTallest+1).reverse();
  }

  // This logic expects 2 "walls" of heights that can, "trap water" between them.
  // The barrier is the second tallest item where the water will rise to. Then we simply
  // subtract each value from the barrier to sum the filled indices.
  const barrier = Math.min(section[0], section[section.length-1]);
  return section.reduce((acc, num) => (
    acc + Math.max((barrier - num), 0)
  ), 0);
};

// Finds groups of indices where water may be trapped.
// We only care about sections that have 3 or more items.
const _findSections = (arr) => {
  const sections = [];
  let a = null;

  for (let i = 0 ; i < arr.length; i++) {
    const currNum = arr[i];

    // The first if is to find the first non zero index. This will become our first "barrier".
    // We then loop forward to find the next index that is equal or taller than our barrier and
    // take that slice. We start a new barrier starting at that ending index.
    // If there is no next tallest barrier, then we are at the tail of the array, we need to take
    // that slice to process it.
    if (a === null && currNum > 0) {
      a = i;
    } else if (currNum >= arr[a] || i === arr.length-1) {
      const section = arr.slice(a, i+1);
      if (section.length > 2) sections.push(section);
      a = i;
    }
  }

  return sections;
};

/**
 * MAIN FN
*/
const trap = (height) => {
  return _findSections(height)
    .map(section => _countTraps(section))
    .reduce((acc, num) => (acc + num), 0);
};

export default trap;
