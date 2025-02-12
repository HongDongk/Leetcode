/**
 * @param {number[]} prices
 * @return {number}
 */
 
 // 그리디 문제에 더 적합하다!
var maxProfit = function(prices) {
    let min = 999999;
    let max = 0;

    for(let i = 0; i<prices.length; i++){
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min)
    }

    return max
};