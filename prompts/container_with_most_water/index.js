// Container With Most Water - https://leetcode.com/problems/container-with-most-water/
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

const maxArea = (height) => {
  let a = 0;
  let b = height.length-1;
  let res = 0;

  for (let i = 0; i < height.length-1; i++) {
    const front = height[a];
    const back = height[b];
    const area = ((b-a) * Math.min(front, back));

    res = Math.max(res, area);

    // The equal operator is important here to nudge things forward for cases like: [1,4,2,4,1].
    if (front <= back) {
      a += 1;
    } else {
      b -= 1;
    }
  }

  return res;
};

export default maxArea;
