/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let obj = {}
    let occupied = {}
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            if (obj[s[i]] !== t[i]) {
                return false
            }
        } else {
            if (occupied[t[i]]) {
                return false
            } else {
                occupied[t[i]] = true
                obj[s[i]] = t[i]
            }
        }
    }
    return true
};