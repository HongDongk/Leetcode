/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let answer = 0;
    let now = prices[0];

    for(let i =1; i<prices.length; i++){
        console.log(now);
        if(now>prices[i]){
            now = prices[i];
        }else{
            answer += prices[i] - now;
            now = prices[i];
        }
    }

    return answer;
};