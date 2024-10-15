/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
    let res = 0
    let count = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '0') {
            count++;
        } else if (s[i] === '1') {
            if (count) {
                res += count;
            }
        }
    }
    return res
};