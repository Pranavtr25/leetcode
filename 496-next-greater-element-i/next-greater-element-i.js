/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let res = []
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            let flag1 = 0
            if (nums1[i] === nums2[j]) {
                flag1 = 1
                j++;
                let flag2 = 0
                while (j < nums2.length) {
                    if (nums2[j] > nums1[i]) {
                        flag2 = 1;
                        res.push(nums2[j])
                        break;
                    }
                    j++;
                }
                if (!flag2) {
                    res.push(-1)
                }
            }
            if (flag1) {
                break;
            }
        }
    }
    return res;
};