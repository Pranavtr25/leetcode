/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let res = []
    for (let i = left; i <= right; i++) {
        if (i < 10) {
            res.push(i)
        } else {
            let num = i
            let flag = 1
            while (num) {
                let rem = num % 10
                if (i % rem !== 0) {
                    flag = 0
                    break;
                }
                num = Math.floor(num / 10)
            }
            if (flag) {
                res.push(i)
            }
        }
    }
    return res;
};