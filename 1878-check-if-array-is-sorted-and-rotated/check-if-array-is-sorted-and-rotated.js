/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    function isArraySorted(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                return false;
            }
        }
        return true;
    }
    if (isArraySorted(nums)) {
        return true;
    }
    for (let i = 0; i < nums.length; i++) {
        let val = nums.shift();
        nums.push(val);
        if (isArraySorted(nums)) {
            return true;
        }
    }
    return false;
};