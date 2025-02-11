/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    let res = s;
    let resultStr = "";
    let flag = true;
    while (flag) {
        flag = false;
        for (let i = 0; i < res.length; i++) {
            let j = 0;
            let k = i;
            let isSubStr = false;
            while (j < part.length) {
                if (res[k] === part[j]) {
                    isSubStr = true;
                    k++;
                } else {
                    isSubStr = false;
                    break;
                }
                j++;
            }
            if (isSubStr) {
                i = i + (part.length - 1);
                resultStr += res.substr(i + 1, res.length);
                flag = true;
                break;
            } else {
                resultStr += res[i];
            }
        }
        res = resultStr;
        resultStr = "";
    }
    return res;
};