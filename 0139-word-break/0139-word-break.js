/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let words = new Set(wordDict);
    let dp = new Array(s.length+1).fill(false);
    dp[0] = true;

    for(let i =1; i<=s.length; i++){
        for(let j = 0; j<i; j++){
            if(dp[j] && words.has(s.slice(j, i))){
                dp[i] = true;
                break;
            }
        }
    }

    console.log(dp);
    return dp[s.length];
};