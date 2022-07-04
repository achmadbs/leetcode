/**
 * @param {number[]} arr
 * @return {boolean}
 * O(N) space O(N) time
 */
var canMakeArithmeticProgression = function (arr) {
  const maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);
  const gap = (maxValue - minValue) / (arr.length - 1);
  const setArr = new Set(arr);

  while (minValue < maxValue) {
    minValue += gap;
    if (!setArr.has(minValue)) return false;
  }
  return true;
};

/**
 * O(1) space O(N logN) time
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length - 1; i++) {
    const sequence = arr[1] - arr[0];
    if (arr[i + 1] - arr[i] !== sequence) {
      return false;
    }
  }
  return true;
};
