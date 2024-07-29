/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
    let singleSum = 0
    let doubleSum = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 10) {
            singleSum += nums[i]
        } else {
            doubleSum += nums[i]
        }
    }
    if (singleSum === doubleSum) {
        return false
    } else {
        return true
    }
};