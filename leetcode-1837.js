// 1837. Sum of Digits in Base K
var sumBase = function (n, k) {
    let res = ""
    if (n === 0) {
        return 0
    }
    while (n > 0) {
        let val = n % k
        res = val + res;
        n = Math.floor(n / k)
    }
    let sum = 0
    for (let i = 0; i < res.length; i++) {
        sum += Number(res[i])
    }
    return sum
};