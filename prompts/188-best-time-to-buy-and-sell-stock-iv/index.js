// 188. Best Time to Buy and Sell Stock IV - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/

// You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.

// Find the maximum profit you can achieve. You may complete at most k transactions: i.e. you may buy at most k times and sell at most k times.

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// Example 1:
// Input: k = 2, prices = [2,4,1]
// Output: 2
// Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.

// Example 2:
// Input: k = 2, prices = [3,2,6,5,0,3]
// Output: 7
// Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.

const maxProfit = (k, prices) => {
  let kk = k;
  let profit = 0;

  let idxQueue = [0];
  let open = null;
  let close = null;

  while (kk > 0 && idxQueue.length > 0) {
    const startIdx = idxQueue.shift();
    open = prices[startIdx];

    for (let i = startIdx+1; i < prices.length; i++) {
      const curr = prices[i];

      // Find the best opener while the close variable is null.
      if (curr < open && close === null) {
        open = curr;
        continue;
      }

      // Find the best closer.
      if (close === null || curr > close) {
        close = curr;
      } else if (curr < close) {
        // Theres a drop off here, calculate the previous best range, close this loop and queue up this index.
        profit += (close - open);
        // Reset all state for the next range. Decrement k.
        idxQueue.push(i);
        open = null;
        close = null;
        kk--;
        break;
      }
      // If we're at the end of the prices array, then process this range for profit.
      if (i === prices.length-1) {
        profit += (close - open);
      }
    }
  }

  return profit;
};

export default maxProfit;
