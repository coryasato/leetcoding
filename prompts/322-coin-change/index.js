// 322. Coin Change - https://leetcode.com/problems/coin-change/

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

// Note: This strategy assumes coins is sorted from least to greatest.
// The prompt screams, "backtracking" via recursion, but if we use a queue instead of stacks, we can
// bail out the first greedy zero we find going from right to left without having to unwind every branch.
const coinChange = (coins, amount) => {
  if (amount === 0) return 0;
  if (coins.length === 1 && ((amount - coins[0]) !== 0)) return -1;

  const queue = [{ idx: coins.length-1, amt: (amount - coins.at(-1)), count: 1 }];
  let res = Number.MAX_SAFE_INTEGER;

  while (queue.length > 0) {
    const entry = queue.shift();
    const num = coins[entry.idx];

    // If the current number can be equally subtracted from the current entry's amount, then do so
    // without re-queuing the entry (i.e. greedy reduction).
    if (entry.amt % num === 0) {
      res = Math.min(res, (entry.count + (entry.amt / num)));
      continue;
    }

    const remainder = entry.amt - num;

    // The current num subtracts negatively, try the prev number in coins.
    if (remainder < 0 && entry.idx > 0) {
      queue.push({ ...entry, idx: entry.idx-1 });
      continue;
    }

    // The current num subtracts into a positive amount, requeue the entry and try the same number again (same idx).
    if (remainder > 0) {
      queue.push({ idx: entry.idx, amt: remainder, count: entry.count+1  });
      continue;
    }

    if (remainder === 0) {
      res = Math.min(res, entry.count+1);
    }
  }

  return res === Number.MAX_SAFE_INTEGER ? -1 : res;
};

export default coinChange;
