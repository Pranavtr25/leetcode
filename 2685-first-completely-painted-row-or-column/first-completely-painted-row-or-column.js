/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
    let obj = {}
    let obj2 = { i: [], j: [] };
    let row = mat.length;
    let col = mat[0].length;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            obj[mat[i][j]] = [i, j];
        }
    }
    for (let i = 0; i < row; i++) {
        obj2['i'].push(0);
    }
    for (let i = 0; i < col; i++) {
        obj2['j'].push(0);
    }
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj2['i'][obj[arr[i]][0]]++;
            obj2['j'][obj[arr[i]][1]]++;
        }
        if (obj2['i'][obj[arr[i]][0]] >= col || obj2['j'][obj[arr[i]][1]] >= row) {
            return i;
        }
    }
};