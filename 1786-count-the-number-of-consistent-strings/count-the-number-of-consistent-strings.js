/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let obj = {}
    let count = 0;
    for (let i = 0; i < allowed.length; i++) {
        if (obj[allowed[i]]) {
            obj[allowed[i]]++;
        } else {
            obj[allowed[i]] = 1;
        }
    }
    for (let i = 0; i < words.length; i++) {
        let flag = 1;
        for (let j = 0; j < words[i].length; j++) {
            if (!obj[words[i][j]]) {
                flag = 0;
                break;
            }
        }
        if (flag) {
            count++;
        }
    }
    return count;
};