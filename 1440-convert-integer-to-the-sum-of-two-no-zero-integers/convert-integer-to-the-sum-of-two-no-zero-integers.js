/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    let n1 = n - 1
    let n2 = 1
    function nonZero(num) {
        let numNew = num
        let flag = 1
        while (numNew !== 0) {
            if (numNew % 10 === 0) {
                flag = 0
                break;
            } else {
                numNew = Math.floor(numNew / 10);
            }
        }
        if (flag) {
            return true
        } else {
            return false
        }
    }
    while (n1 !== 0 && n2 !== n) {
        if (nonZero(n1) && nonZero(n2)) {
            return [n1, n2]
        }
        n1--;
        n2++;
    }
};