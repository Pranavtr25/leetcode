/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if(s.length === 1){
        return s;
    }else if(s.length === 2){
        if (s[0] === s[1]){
            return s;
        }else{
            return s[0]
        }
    }
    let res = ""
    for (let i = 0; i < s.length - 1; i++) {
        let subStr = s.substring(i, s.length)
        let j = subStr.length
        if (subStr.length === 2) {
            if (subStr[0] === subStr[1] && subStr.length > res.length) {
                res = subStr
            }
        } else {
            while (subStr.length >= 2) {
                let flag = 1
                for (let k = 0; k <= Math.floor(subStr.length / 2); k++) {
                    if (subStr[k] !== subStr[subStr.length - 1 - k]) {
                        flag = 0;
                        break;
                    }
                }
                if (flag) {
                    if (subStr.length > res.length) {
                        res = subStr
                    }
                    break;
                }
                subStr = subStr.substring(0, subStr.length - 1)
            }
        }
    }
    if(res.length){
        return res;
    }else{
        return s[0]
    }
};