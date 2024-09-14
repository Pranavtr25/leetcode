/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let count = 0
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) {
            let maxCount = 0
            while (i < nums.length && nums[i] === max) {
                maxCount++;
                i++
            }
            if (maxCount > count) {
                count = maxCount;
            }
        }
    }
    return count;
};