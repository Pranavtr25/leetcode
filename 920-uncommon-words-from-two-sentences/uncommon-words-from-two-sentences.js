/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let obj1 = {}
    let obj2 = {}
    let res = []
    s1 = s1.split(' ')
    s2 = s2.split(' ')
    for (let i = 0; i < s1.length; i++) {
        if (obj1[s1[i]]) {
            obj1[s1[i]]++;
        } else {
            obj1[s1[i]] = 1;
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (obj2[s2[i]]) {
            obj2[s2[i]]++;
        } else {
            obj2[s2[i]] = 1;
        }
    }
    let i = 0;
    while (i < s1.length && i < s2.length) {
        if (!obj2[s1[i]] && obj1[s1[i]] === 1) {
            res.push(s1[i])
        }
        if (!obj1[s2[i]] && obj2[s2[i]] === 1) {
            res.push(s2[i])
        }
        i++;
    }
    if (i < s1.length) {
        while (i < s1.length) {
            if (!obj2[s1[i]] && obj1[s1[i]] === 1) {
                res.push(s1[i])
            }
            i++;
        }
    } else if (i < s2.length) {
        while (i < s2.length) {
            if (!obj1[s2[i]] && obj2[s2[i]] === 1) {
                res.push(s2[i])
            }
            i++;
        }
    }
    return res;
};