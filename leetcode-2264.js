//  2264. Largest 3-Same-Digit Number in String

var largestGoodInteger = function (num) {
    let res = ""
    let k = 0
    for (let i = 0; i < num.length - 2; i++) {
        if (num[i] == num[i + 1] && num[i] == num[i + 2] && num[i] >= k) {
            res = num[i] + num[i] + num[i]
            k = num[i]
            i += 2;
        }
    }
    return res;
};