// 218. The Skyline Problem - https://leetcode.com/problems/the-skyline-problem/

// A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.

// The geometric information of each building is given in the array buildings where buildings[i] = [lefti, righti, heighti]:

// lefti is the x coordinate of the left edge of the ith building.
// righti is the x coordinate of the right edge of the ith building.
// heighti is the height of the ith building.
// You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

// The skyline should be represented as a list of "key points" sorted by their x-coordinate in the form [[x1,y1],[x2,y2],...]. Each key point is the left endpoint of some horizontal segment in the skyline except the last point in the list, which always has a y-coordinate 0 and is used to mark the skyline's termination where the rightmost building ends. Any ground between the leftmost and rightmost buildings should be part of the skyline's contour.

// Note: There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...,[2 3],[4 5],[7 5],[11 5],[12 7],...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...,[2 3],[4 5],[12 7],...]

// Example 1:
// Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
// Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
// Explanation:
// Figure A shows the buildings of the input.
// Figure B shows the skyline formed by those buildings. The red points in figure B represent the key points in the output list.

// Example 2:
// Input: buildings = [[0,2,3],[2,5,3]]
// Output: [[0,3],[5,0]]

const getSkyline = (buildings) => {
  // Create an array of arrays for groups of buildings. This will allow us to calculate plot points
  // for overlapping groups of buildings and not have to account for the gaps between them later on.
  let groups = [];
  let leftIdx = 0;
  let rangeL = buildings[0][0];
  let rangeR = buildings[0][1];
  buildings.forEach((building, i) => {
    if (i === buildings.length-1) {
      groups.push(buildings.slice(leftIdx));
      return;
    }
    // If the current buildings left is greater than the past groups right, then we have a gap
    // between buildings. Here we reset the variables to start a new group.
    if (building[0] > rangeR) {
      groups.push(buildings.slice(leftIdx, i));
      leftIdx = i;
      rangeL = building[0];
      rangeR = building[1];
    } else if (building[1] > rangeR) {
      rangeR = building[1];
    }
  });

  const res = [];
  while(groups.length > 0) {
    const group = groups.shift();

    group.forEach((building, i) => {
      const next = group[i+1] || null;

      if (next) {
        if (i === 0) {
          res.push([building[0], building[2]]);
        }

        if (building[2] < next[2]) {           // UP
          res.push([next[0], next[2]]);
        } else if (building[2] !== next[2]) {  // DOWN (and never horizontal)
          res.push([building[1], next[2]]);
        }
      }

      // End of a building group, take the right plot point and end it with a zero.
      if (next === null) {
        res.push([building[1], 0]);
      }
    });
  }

  return res;
};

export default getSkyline;
