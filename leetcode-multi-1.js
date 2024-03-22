// 2455. Average Value of Even Numbers That Are Divisible by Three

var averageValue = function (nums) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 6 === 0) {
            sum += nums[i];
            count++;
        }
    }
    if (count === 0) {
        return 0;
    }
    return Math.floor(sum / count)
};


// 258. Add Digits

var addDigits = function (num) {
    let a;
    let b;
    while (num >= 10) {
        a = num % 10
        b = Math.floor(num / 10)
        num = a + b
    }
    return num
};


// 1929. Concatenation of Array

var getConcatenation = function(nums) {
    return [...nums,...nums]
};


// 2469. Convert the Temperature

var convertTemperature = function(celsius) {
    let res=[]
    res.push(celsius+273.15,(9/5*celsius)+32)
    return res;
};


// 2413. Smallest Even Multiple

var smallestEvenMultiple = function (n) {
    return n % 2 == 0 ? n : n * 2
};
