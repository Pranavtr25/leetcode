/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let greatest = 0;
        if (i == arr.length - 1) {
            res.push(-1)
            break;
        }
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > greatest) {
                greatest = arr[j];
            }
        }
        res.push(greatest)
    }
    return res;
};