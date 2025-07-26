/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;

    let dp = new Array(obstacleGrid.length).fill(0).map((a) => new Array(obstacleGrid[0].length).fill(0));
    dp[0][0] = 1;

    for(let i = 1; i<obstacleGrid[0].length; i++){
        if(obstacleGrid[0][i] !== 1 && dp[0][i - 1] === 1){
            dp[0][i] = 1;
        }
    }

    for(let i = 1; i<obstacleGrid.length; i++){
        if(obstacleGrid[i][0] !== 1 && dp[i - 1][0] === 1){
            dp[i][0] = 1;
        }
    }

    for(let i = 1; i<obstacleGrid.length; i++){
       for(let j = 1; j<obstacleGrid[0].length; j++){
        if(obstacleGrid[i][j] !== 1){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
       }
    }

    return dp[dp.length-1][dp[0].length-1]
};