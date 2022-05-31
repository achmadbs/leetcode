/**
 * @param {array} nums
 * @param {number} integer
 * @return {array}
 */
var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hash) {
      return [hash[target - nums[i]], i];
    } else {
      hash[nums[i]] = i;
    }
  }
  return [];
};
