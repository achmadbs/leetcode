/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let currentMax = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      currentMax = Math.max(profit, currentMax);
    } else {
      left = right;
    }
    right++;
  }
  return currentMax;
};
