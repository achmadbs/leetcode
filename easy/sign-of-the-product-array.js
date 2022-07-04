/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  const numbers = [];
  let product = 1;

  for (let i of nums) {
    if (i < 0) numbers.push(-1);
    else if (i > 0) numbers.push(1);
    else numbers.push(0);
  }

  for (let i of numbers) {
    product = product * i;
  }
  return product < 0 ? -1 : product > 0 ? 1 : 0;
};
