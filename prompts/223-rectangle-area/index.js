// 223. Rectangle Area - https://leetcode.com/problems/rectangle-area/

// Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.

// The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).

// The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).

// Example 1:
// Rectangle Area
// Input: ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
// Output: 45

// Example 2:
// Input: ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
// Output: 16

const computeArea = (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) => {
  const aArea = ( (Math.abs(ax1) + Math.abs(ax2)) * ((Math.abs(ay1) + Math.abs(ay2))) );
  const bArea = ( (Math.abs(bx1) + Math.abs(bx2)) * ((Math.abs(by1) + Math.abs(by2))) );
  const overlap = ( (Math.abs(bx1) + Math.abs(ax2)) * (Math.abs(ay1) + Math.abs(by2)) );

  return ((aArea + bArea) - overlap);
};

export default computeArea;
