// 231. Power of Two

var isPowerOfTwo = function (n) {
    let power = 1
    if (n == 1) {
        return true;
    } else if (n < 1) {
        return false;
    }
    while (power <= n) {
        power *= 2;
        if (power === n) {
            return true
        }
    }
    return false;
};