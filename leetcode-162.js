var findPeakElement = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i
        }
    }
    let maxIndex = 0;
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }
    return maxIndex;
};

