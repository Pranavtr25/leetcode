// 1848. Minimum Distance to the Target Element


var getMinDistance = function (nums, target, start) {
    let min = nums.length
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (Math.abs(i - start) < min) {
                min = Math.abs(i - start)
            }
        }
    }
    return min;
};