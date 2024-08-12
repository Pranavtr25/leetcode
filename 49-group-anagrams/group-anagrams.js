/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let res = []
    let strs2 = [...strs]
    for (let i = 0; i < strs2.length; i++) {
        strs2[i] = strs2[i].split('').sort().join('')
    }
    for (let i = 0; i < strs2.length; i++) {
        let val = []
        if (strs2[i] !== 0) {
            val.push(strs[i])
            for (let j = i + 1; j < strs2.length; j++) {
                if (strs2[i] === strs2[j] && strs2[j] !== 0) {
                    val.push(strs[j])
                    strs2[j] = 0
                }
            }
            res.push(val);
        }
    }
    return res
};