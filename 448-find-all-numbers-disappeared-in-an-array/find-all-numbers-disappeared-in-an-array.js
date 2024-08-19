/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let count = {}
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]]) {
            count[nums[i]]++;
        } else {
            count[nums[i]] = 1
        }
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!count[i]) {
            res.push(i)
        }
    }
    return res
};