/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let obj = {}
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]]++;
        } else {
            obj[s[i]] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (obj[t[i]]) {
            obj[t[i]]--;
            if (obj[t[i]] === 0) {
                delete obj[t[i]];
            }
        } else {
            return false;
        }
    }
    if (Object.keys(obj).length === 0) {
        return true
    } else {
        return false
    }
};