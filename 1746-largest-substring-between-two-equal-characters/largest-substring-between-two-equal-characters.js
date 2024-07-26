/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let obj = {}
    let max = 0
    let flag = 0
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            flag = 1
            if (max < (i - obj[s[i]])) {
                max = i - obj[s[i]]
            }
        } else {
            obj[s[i]] = i + 1
        }
    }
    if (flag) {
        return max;
    } else {
        return -1;
    }
};