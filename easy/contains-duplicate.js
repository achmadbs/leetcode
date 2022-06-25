/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hashNums = {};
  for (let i in nums) {
    if (!(nums[i] in hashNums)) {
      hashNums[nums[i]] = i;
    } else {
      return true;
    }
  }
  return false;
};
