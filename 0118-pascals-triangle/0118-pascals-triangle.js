/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let dp = new Array(numRows).fill(0).map((a) => []);
    dp[0] = [1];

    for(let i =1; i<numRows; i++){
        // console.log('실행?', numRows)
        dp[i][0] = 1;
        dp[i][i] = 1;
        for(let j =1; j<i; j++){
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
        }
    }
    return dp;
};