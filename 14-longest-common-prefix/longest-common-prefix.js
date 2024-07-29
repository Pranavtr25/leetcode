/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = strs[0]
    let prefix = ""
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][j] === commonPrefix[j]) {
                prefix += strs[i][j]
            } else {
                break;
            }
        }
        commonPrefix = prefix;
        prefix = ""
    }
    return commonPrefix;
};