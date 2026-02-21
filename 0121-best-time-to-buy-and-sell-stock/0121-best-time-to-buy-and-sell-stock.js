/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let answer = 0;
    let buyprice = prices[0];

    for(let i =1; i<prices.length; i++){
        if(prices[i] < buyprice){
            buyprice = prices[i];
            continue;
        }
        answer = Math.max(answer, prices[i] - buyprice);
    }

    return answer;
};