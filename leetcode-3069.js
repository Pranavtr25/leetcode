var resultArray = function (nums) {
    let nums1 = [];
    let nums2 = [];
    nums1.push(nums[0]);
    nums2.push(nums[1]);
    for (let i = 2; i < nums.length; i++) {
        if (nums1[nums1.length - 1] > nums2[nums2.length - 1]) {
            nums1.push(nums[i])
        } else {
            nums2.push(nums[i])
        }
    }
    return [...nums1, ...nums2];
};