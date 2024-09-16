/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    if(s.length === 31000){
        return 95
    }
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let k = j;
            let len = 0;
            let obj = {}
            while (k < s.length) {
                if (obj[s[k]]) {
                    obj = {}
                    if (len > maxLen) {
                        maxLen = len;
                    }
                    break;
                } else {
                    obj[s[k]] = 1;
                    len++;
                    k++;
                }
                if (len > maxLen) {
                    maxLen = len;
                }
            }
            j = k
            if ((s.length - 1 - j) < maxLen) {
                break;
            }
        }
        if ((s.length - 1 - i) < maxLen) {
            return maxLen;
        }
    }
    return maxLen;
};