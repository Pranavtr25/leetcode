var finalPrices = function (prices) {
    let i = 0;
    let j = i + 1
    while (i < prices.length) {
        if (j >= prices.length) {
            i++;
            j = i + 1;
        }
        if (prices[j] <= prices[i]) {
            prices[i] -= prices[j];
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }
    return prices;
};