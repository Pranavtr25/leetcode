/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
    let count = 0
    let n = num + ""
    for (let i = 0; i < n.length - (k - 1); i++) {
        let subStr = ""
        let l = i
        for (let j = 0; j < k; j++) {
            subStr += n[l++]
        }
        if (num % Number(subStr) === 0) {
            count++;
        }
    }
    return count;
};