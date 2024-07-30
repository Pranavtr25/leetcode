/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let index = -1
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let firstIndex = i;
            let flag = 1
            let k = i
            for (let j = 0; j < needle.length; j++) {
                if (haystack[k++] !== needle[j]) {
                    flag = 0
                    break;
                }
            }
            if (flag) {
                return firstIndex
            }
        }
    }
    return index;
};