/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let strNum = num + ""
    let strRes = ""
    let flag = 1
    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] === '6' && flag) {
            strRes += '9'
            flag = 0
        } else {
            strRes += strNum[i]
        }
    }
    return Number(strRes);
};