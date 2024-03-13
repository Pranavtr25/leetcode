var finalValueAfterOperations = function (operations) {
    let res = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "X++" || operations[i] === "++X") {
            res += 1;
        } else {
            res -= 1;
        }
    }
    return res;
};