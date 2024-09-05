/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let res = ""
    let bal = 0
    let j = a.length - 1;
    for (let i = b.length - 1; i >= 0 && j >= 0; i--) {
        if (Number(a[j]) + Number(b[i]) + bal === 0) {
            res = 0 + res
        } else if (Number(a[j]) + Number(b[i]) + bal === 1) {
            res = 1 + res
            bal = 0
        } else if (Number(a[j]) + Number(b[i]) + bal === 2) {
            res = 0 + res
            bal = 1
        } else if (Number(a[j]) + Number(b[i]) + bal === 3) {
            res = 1 + res
            bal = 1
        }
        j--;
    }
    if (a.length > b.length) {
        for (let i = (a.length - b.length) - 1; i >= 0; i--) {
            if (Number(a[i]) + bal === 0) {
                if (i !== 0) {
                    res = 0 + res
                }
            } else if (Number(a[i]) + bal === 1) {
                res = 1 + res
                bal = 0
            } else if (Number(a[i]) + bal === 2) {
                if (i === 0) {
                    res = 10 + res
                    bal = 0
                } else {
                    res = 0 + res
                    bal = 1
                }
            }
        }
    } else {
        for (let i = (b.length - a.length) - 1; i >= 0; i--) {
            if (Number(b[i]) + bal === 0) {
                if (i !== 0) {
                    res = 0 + res
                }
            } else if (Number(b[i]) + bal === 1) {
                res = 1 + res
                bal = 0
            } else if (Number(b[i]) + bal === 2) {
                if (i === 0) {
                    res = 10 + res
                    bal = 0
                } else {
                    res = 0 + res
                    bal = 1
                }
            }
        }
    }

    if (bal) {
        res = 1 + res
    }
    return res;
};