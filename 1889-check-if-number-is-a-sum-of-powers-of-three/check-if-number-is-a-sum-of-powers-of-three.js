/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    let i = 0;
    while (Math.pow(3, i) <= n) {
        i++;
    }
    i--;
    let val = n;
    val = val - Math.pow(3, i)
    i--;
    while (i >= 0) {
        if (Math.pow(3, i) <= val) {
            val = val - Math.pow(3, i)
            i--;
        } else {
            i--;
        }
    }
    if(val === 0){
        return true
    }else{
        return false;
    }
};