/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let count = 0;
    let res
    for (let i = 0; i < nums.length; i++) {
        res = "" + nums[i];
        if (res.length % 2 == 0) {
            count++;
        }
    }
    return count;
};