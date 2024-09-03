/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let val = ""
    for (let i = 0; i < s.length; i++) {
        val += s.charCodeAt(i) - 96
    }
    let limit = 0
    let transformVal;
    while (limit < k) {
        transformVal = 0;
        for (let i = 0; i < val.length; i++) {
            transformVal += Number(val[i])
        }
        val = transformVal + "";
        limit++;
    }
    return transformVal;
};