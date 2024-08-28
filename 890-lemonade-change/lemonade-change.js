/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let balance = {}
    for (let i = 0; i < bills.length; i++) {
        if (balance[bills[i]]) {
            balance[bills[i]]++;
        } else {
            balance[bills[i]] = 1;
        }
        if (bills[i] !== 5) {
            if (bills[i] > 10) {
                if (balance[5] && balance[10]) {
                    balance[5]--;
                    balance[10]--;
                } else if (balance[5]) {
                    for (let i = 0; i < 3; i++) {
                        if (balance[5]) {
                            balance[5]--;
                        } else {
                            return false;
                        }
                    }
                } else {
                    return false;
                }
            } else if (bills[i] === 10) {
                if (balance[5]) {
                    balance[5]--;
                } else {
                    return false;
                }
            }
        }
    }
    return true;
};