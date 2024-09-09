/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    let count = 0
    let res = 0
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            count++;
            res += count;
        } else {
            count = 0;
        }
    }
    return res;
}