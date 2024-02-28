// Minimum Sum of Mountain Triplets I

var minimumSum = function (nums) {
    let sum = Infinity;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] < nums[j] && nums[k] < nums[j]) {
                    if (nums[i] + nums[j] + nums[k] < sum) {
                        sum = nums[i] + nums[j] + nums[k]
                    }
                }
            }
        }
    }
    if (sum === Infinity) {
        return -1;
    }
    return sum;
};