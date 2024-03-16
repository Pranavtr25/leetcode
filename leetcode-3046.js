var isPossibleToSplit = function (nums) {
    let freq = {};
    for (let i = 0; i < nums.length; i++) {
        if (freq[nums[i]]) {
            freq[nums[i]]++;
            if (freq[nums[i]] > 2) {
                return false;
            }
        } else {
            freq[nums[i]] = 1;
        }
    }
    return true;
};