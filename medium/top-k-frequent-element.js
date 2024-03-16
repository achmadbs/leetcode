/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hashNum = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hashNum.has(nums[i])) {
            hashNum.set(nums[i], hashNum.get(nums[i]) + 1)
        } else {
            hashNum.set(nums[i], 1)
        }
    };

    const result = [...hashNum.keys()].sort((a, b) => hashNum.get(b) - hashNum.get(a)).slice(0, k);

    return result;
};
