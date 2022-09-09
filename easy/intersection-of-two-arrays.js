/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const res = [];
  const obj = {};
  for (let x of nums2) {
    if (!(x in obj)) {
      obj[x] = true;
    }
  }
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] in obj && !res.includes(nums1[i])) {
      res.push(nums1[i]);
    }
  }
  return res;
};
