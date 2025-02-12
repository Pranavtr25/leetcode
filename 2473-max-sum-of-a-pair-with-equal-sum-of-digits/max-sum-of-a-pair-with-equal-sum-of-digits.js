/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    let obj = {};
    let res = 0;
    let flag = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        let val = nums[i];
        while (val) {
            let rem = val % 10
            sum += rem;
            val = Math.floor(val / 10);
        }
        if (!obj[sum]) {
            obj[sum] = [nums[i]];
        } else {
            flag = 1;
            for (let j = 0; j < obj[sum].length; j++) {
                if (obj[sum][j] + nums[i] > res) {
                    res = obj[sum][j] + nums[i];
                }
            }
            obj[sum].push(nums[i]);
        }
    }
    if (!flag) {
        return -1;
    }
    return res;
};