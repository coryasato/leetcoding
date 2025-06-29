// 135. Candy - https://leetcode.com/problems/candy/

// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

// Example 1:
// Input: ratings = [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

// Example 2:
// Input: ratings = [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
// The third child gets 1 candy because it satisfies the above two conditions.

const candy = (ratings) => {
  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    const next = ratings[i+1];
    const prev = ratings[i-1];

    if (rating === 0) {
      ratings[i] = 1;
    } else if (rating > 0 && next === 0) {
      ratings[i] += 1;
    } else if (rating > 0 && prev >= rating) {
      ratings[i] = 1;
    }
  }

  return ratings.reduce((acc, num) => acc + num, 0);
};

export default candy;
