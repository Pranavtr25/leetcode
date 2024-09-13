/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').sort().join('')
    }
    for (let i = 0; i < words.length; i++) {
        let res = ""
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === words[i][j + 1]) {
                continue;
            }
            res += words[i][j]
        }
        words[i] = res
    }
    let obj = {}
    let count = 0
    for (let i = 0; i < words.length; i++) {
        if (obj[words[i]]) {
            obj[words[i]]++;
        } else {
            obj[words[i]] = 1;
        }
    }
    for (let key in obj) {
        if (obj[key] > 2) {
            for (let i = 0; i < obj[key] - 1; i++) {
                for (let j = i + 1; j < obj[key]; j++) {
                    count++;
                }
            }
        } else if (obj[key] === 2) {
            count++;
        }
    }
    return count;
};