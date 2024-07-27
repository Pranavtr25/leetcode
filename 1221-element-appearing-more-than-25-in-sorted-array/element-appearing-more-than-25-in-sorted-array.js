/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    let freq = arr.length / 4
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
            if (obj[arr[i]] > freq) {
                return arr[i]
            }
        } else {
            obj[arr[i]] = 1
            if (obj[arr[i]] > freq) {
                console.log(arr[i])
                return arr[i]
            }
        }
    }
};