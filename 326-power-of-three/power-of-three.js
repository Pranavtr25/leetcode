/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    let power = 1
    if (n == 1) {
        return true;
    } else if (n <= 2) {
        return false;
    }
    while (power <= n) {
        power *= 3;
        if (power === n) {
            return true
        }
    }
    return false
};