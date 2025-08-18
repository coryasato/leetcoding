// 174. Dungeon Game - https://leetcode.com/problems/dungeon-game/description/

// The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of m x n rooms laid out in a 2D grid. Our valiant knight was initially positioned in the top-left room and must fight his way through dungeon to rescue the princess.

// The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

// Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight's health (represented by positive integers).

// To reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

// Return the knight's minimum initial health so that he can rescue the princess.

// Note that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.

// Example 1:
// Input: dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]
// Output: 7
// Explanation: The initial health of the knight must be at least 7 if he follows the optimal path: RIGHT-> RIGHT -> DOWN -> DOWN.

// Example 2:
// Input: dungeon = [[0]]
// Output: 1

const calculateMinimumHP = (dungeon) => {
  // Sum the first row horizonally, we'll start the DP process on the second row.
  for (let i = 1; i < dungeon[0].length; i++) {
    dungeon[0][i] = dungeon[0][i] + dungeon[0][i-1];
  }

  let res = 1;
  for(let i = 1; i < dungeon.length; i++) {
    for(let j = 0; j < dungeon[i].length; j++) {
      if (j === 0) {
        // The first column can only be counted vertically.
        dungeon[i][j] = dungeon[i-1][j] + dungeon[i][j];
      } else {
        // From the second column and forward, sum the most effective path forward. We need to account for negative nums.
        const horizontalSun = dungeon[i][j-1] + dungeon[i][j];
        const verticalSum = dungeon[i-1][j] + dungeon[i][j];

        // When we hit the last cell, we need to calc which is the minimal path / what takes the least resources to one HP.
        if (i === dungeon.length-1 && j === dungeon[i].length-1) {
          const closestToZero = Math.abs(horizontalSun) < Math.abs(verticalSum) ? horizontalSun : verticalSum;
          res = closestToZero <= 0 ? (Math.abs(closestToZero) + 1) : closestToZero;
        }
        dungeon[i][j] = Math.max(horizontalSun, verticalSum);
      }
    }
  }

  return res;
};

export default calculateMinimumHP;
