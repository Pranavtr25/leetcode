/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
    function pairsCount(n) {
        return total = (n * (n - 1)) / 2
    }
    let obj = {};
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i] - i]) {
            obj[nums[i] - i]++;
        } else {
            obj[nums[i] - i] = 1;
        }
    }
    for (let key in obj) {
        if (obj[key] > 1) {
            count += pairsCount(obj[key]);
        }
    }
    return pairsCount(nums.length) - count;
};