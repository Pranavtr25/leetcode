/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let elementSum = 0;
    let digitSum = 0;
    for (let i = 0; i < nums.length; i++) {
        elementSum += nums[i]
        while (nums[i]) {
            let rem = nums[i] % 10
            digitSum += rem
            nums[i] = Math.floor(nums[i] / 10)
        }
    }
    if (elementSum > digitSum) {
        return elementSum - digitSum;
    } else {
        return digitSum - elementSum;
    }
};