// 207. Course Schedule - https://leetcode.com/problems/course-schedule/

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.

// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// NOTE: Not sure what the numCourses arg is for.
// My solution is finding a collision in a graph like algorithm. If there is a circular reference, then we short circuit the loop and return false.
// The constraint says numCourses will be greater than any prerequisite (a or b) and that each prerequisite are unique.
// So given that, I don't see any logic to where we'd need to account for numCourses to get our result.
const canFinish = (numCourses, prerequisites) => {
  let courseMap = {};
  let passed = true;

  for (let i = 0; i < prerequisites.length; i++) {
    const [a, b] = prerequisites[i];

    if ((a in courseMap) && courseMap[a].includes(b)) {
      passed = false;
      break;
    } else {
      courseMap[b] = (courseMap[b] || []).concat(a);
    }
  }

  return passed;
};

export default canFinish;
