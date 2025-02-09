/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let dp = new Array(rowIndex+1).fill(0).map((a) => []);
    dp[0] = [1];

    for(let i =1; i<=rowIndex; i++){
        dp[i][0] = 1;
        dp[i][i] = 1;
        for(let j =1; j<i; j++){
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
        }
    }

    return dp[rowIndex];
};