/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    minPrice = Infinity;
    maxProfitResult = 0;
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfitResult = Math.max(maxProfitResult, price - minPrice);
    }
    return maxProfitResult;
};
