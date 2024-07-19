// 1380. Lucky Numbers in a Matrix

var luckyNumbers = function (matrix) {
    let res = []
    for (let i = 0; i < matrix.length; i++) {
        let min = matrix[i][0]
        let minIndex = 0
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
                minIndex = j
            }
        }
        let flag = 1
        for (let k = 0; k < matrix.length; k++) {
            if (min < matrix[k][minIndex]) {
                flag = 0
                break;
            }
        }
        if (flag) {
            res.push(min)
        }
    }
    return res;
};