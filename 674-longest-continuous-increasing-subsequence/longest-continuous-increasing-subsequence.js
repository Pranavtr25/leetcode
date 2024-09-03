/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let sameval = 1;
    let count = 0;
    let res = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            count++;
            sameVal = 0
        } else {
            count = 0
        }
        if (count > res) {
            res = count;
        }
    }
    if (sameVal) {
        return 1;
    } else {
        return ++res;
    }
};