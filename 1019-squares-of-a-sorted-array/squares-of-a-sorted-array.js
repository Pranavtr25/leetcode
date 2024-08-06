/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(nums[i] * nums[i])
    }
    for (let i = 0; i < res.length; i++) {
        for (let j = i + 1; j < res.length; j++) {
            if (res[i] > res[j]) {
                let temp = res[i];
                res[i] = res[j];
                res[j] = temp;
            }
        }
    }
    return res;
};