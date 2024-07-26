/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let obj = {}
    let max = -1
    let flag = 0
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            if (max < (i - obj[s[i]])) {
                max = i - obj[s[i]]
            }
        } else {
            obj[s[i]] = i + 1
        }
    }
    return max;
};