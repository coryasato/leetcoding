// 309. Best Time to Buy and Sell Stock with Cooldown - https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// Example 1:
// Input: prices = [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]

// Example 2:
// Input: prices = [1]
// Output: 0

// NOTE: Instead of recursion, this is a branching pattern. At each price we have 2 decisions for each
// state held. If we can buy, we do so or skip, if we can sell we do so or skip. 2 branches per "node".
// Since we'd have to do similar stacks per recursion, this makes the logic a bit simpler to reason about.
const maxProfit = (prices) => {
  if (prices.length <= 1) return 0;

  let max = 0;

  const queue = [{ state: 1, stock: prices[0], sum: 0, prices: prices.slice(1) }];

  while (queue.length > 0) {
    const curr = queue.shift();
    const nextPrices = curr.prices.slice(1);
    const nextStock = curr.prices[0];

    if (curr.state === 1) {
      const sum = (nextStock - curr.stock) + curr.sum;

      // Set max
      max = Math.max(max, sum);

      // If we sell, we need to skip the next stock for the cooldown mandate.
      if (nextPrices.length > 1) {
        // SELL
        queue.push({ state: -1, stock: null, sum: sum, prices: [...nextPrices.slice(1)] });
      }

      if (nextPrices.length > 0) {
        // SKIP
        queue.push({ ...curr, prices: [...nextPrices] });
      }

    } else {
      if (nextPrices.length > 0) {
        // BUY
        queue.push({ state: 1, stock: nextStock, sum: curr.sum, prices: [...nextPrices] });
        // SKIP
        queue.push({ ...curr, prices: [...nextPrices] });
      }
    }
  }

  return max;
};

export default maxProfit;
