// 2544. Alternating Digit Sum

var alternateDigitSum = function (n) {
    let arr = []
    let sum = 0
    while (n > 0) {
        val = n % 10
        arr.push(val)
        n = Math.floor(n / 10)
    }
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            sum += arr[i]
        } else {
            sum -= arr[i];
        }
    }
    return sum
};