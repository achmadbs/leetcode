/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums.map((value) => value * value).sort((a, b) => a - b);
};
