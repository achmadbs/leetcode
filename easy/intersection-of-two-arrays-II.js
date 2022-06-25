/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const hashMap = {};
  const result = [];
  for (let x of nums1) {
    if (!hashMap[x]) {
      hashMap[x] = 1;
    } else {
      hashMap[x]++;
    }
  }
  for (let i of nums2) {
    if (hashMap[i]) {
      result.push(i);
      hashMap[i]--;
    }
  }
  return result;
};
