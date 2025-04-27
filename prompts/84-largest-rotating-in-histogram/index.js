// 84. Largest Rectangle in Histogram - https://leetcode.com/problems/largest-rectangle-in-histogram

// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// Example 2:
// Input: heights = [2,4]
// Output: 4

// Initial brute force solution.
const __largestRectArea = (heights) => {
  let result = 0;

  for (let i = 1; i < heights.length; i++) {
    const num = heights[i];

    // Loop backwards and get the top accruing area.
    let top = num;
    let smallest = num;
    for (let j = i - 1; j >= 0; j--) {
      const lastNum = heights[j];
      smallest = Math.min(smallest, lastNum);
      const area = smallest * ((i - j) + 1);
      top = Math.max(top, area);
    }

    // Loop forwards to add any index that is larger than the current index.
    // Break once we hit a smaller index, we shouldn't go any further because
    // subsequent indexes will pick up a larger area going backwards, if there is one.
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] < num) break;
      top += num;
    }

    result = Math.max(result, top);
  }

  return result;
};

// Looked this one up to study an O(n) solution utilizing a Monotonic stack.
const largestRectArea = (heights) => {
  let left = new Array(heights.length).fill(-1);
  let right = new Array(heights.length).fill(heights.length);

  let indexStack = [];
  let result = 0;

  for (let i = 0; i < heights.length; i++) {
    while (indexStack.length > 0 && heights[indexStack[indexStack.length-1]] >= heights[i]) {
      right[indexStack.pop()] = i;
    }

    if (indexStack.length > 0) {
      left[i] = indexStack[indexStack.length-1];
    }

    indexStack.push(i);
  }

  for (let i = 0; i < heights.length; i++) {
    result = Math.max(result, heights[i] * (right[i] - left[i] - 1));
  }

  return result;
};

export default largestRectArea;
