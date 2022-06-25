/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var leftPointer = 0;
  var rightPointer = nums.length - 1;
  while (leftPointer <= rightPointer) {
    var midPointer = Math.floor((leftPointer + rightPointer) / 2);
    if (nums[midPointer] === target) {
      return midPointer;
    } else if (target < nums[midPointer]) {
      rightPointer = midPointer - 1;
    } else {
      leftPointer = midPointer + 1;
    }
  }
  return -1;
};
