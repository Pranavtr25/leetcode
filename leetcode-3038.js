var maxOperations = function (nums) {
    let sum = nums[0] + nums[1];
    let count = 1;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] + nums[i + 1] === sum) {
            count++;
            i++;
        }else{
            break;
        }
    }
    return count;
};