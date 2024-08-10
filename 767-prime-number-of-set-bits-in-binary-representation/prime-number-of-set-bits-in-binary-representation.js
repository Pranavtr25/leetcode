/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
    let val = left
    let count = 0
    while (val <= right) {
        let bitSum = 0
        let res = ""
        let check = val
        while (check) {
            let rem = check % 2
            res = rem + res
            if (rem === 1) {
                bitSum++;
            }
            check = Math.floor(check / 2)
        }

        val++;
        if (bitSum === 2) {
            count++;
        } else if (bitSum < 2) {
            continue;
        } else {
            let flag = 1
            for (let i = 2; i < bitSum; i++) {
                if (bitSum % i === 0) {
                    flag = 0
                    break;
                }
            }
            if (flag) {
                count++;
            }
        }
    }
    return count;
};