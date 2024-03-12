var findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0;
    let i = 0;
    let count = 0;
    while (i < nums.length) {
        if (nums[i] === 1) {
            count++;
            if (count > maxCount) {
                maxCount = count;
            }
        } else {
            count = 0;
        }
        i++;
    }
    return maxCount;
};