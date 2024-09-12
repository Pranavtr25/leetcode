/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
    function decimalToBinary(val) {
        let res = ""
        while (val) {
            let rem = val % 2;
            res = rem + res
            val = Math.floor(val / 2)
        }
        return res
    }
    function generateLeadingZero(val) {
        while (val.length < max) {
            val = 0 + val
        }
        return val
    }
    let val1 = decimalToBinary(a)
    let val2 = decimalToBinary(b)
    let val3 = decimalToBinary(c)
    let max;
    if (val1.length > val2.length && val1.length > val3.length) {
        max = val1.length
    } else {
        if (val2.length > val3.length) {
            max = val2.length
        } else {
            max = val3.length
        }
    }
    val1 = generateLeadingZero(val1)
    val2 = generateLeadingZero(val2)
    val3 = generateLeadingZero(val3)
    let count = 0
    for (let i = 0; i < val1.length; i++) {
        if (val3[i] === '0') {
            if (val1[i] === '1' && val2[i] === '1') {
                count += 2;
            } else if (val1[i] === '1' || val2[i] === '1') {
                count++;
            }
        } else {
            if (val1[i] === '0' && val2[i] === '0') {
                count++;
            }
        }
    }
    return count;
};