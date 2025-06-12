/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let answer = 0;
    let dx = [-1,0,1,0];
    let dy = [0,1,0,-1];

    function dfs(x,y){
        grid[x][y] = '0';

        for(let i =0; i<4; i++){
            let cx = x + dx[i];
            let cy = y + dy[i];

            if(cx>=0 && cy>=0 && cx<grid.length && cy<grid[0].length && grid[cx][cy] === '1'){
                dfs(cx, cy);
            }
        }
    }


    for(let i =0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j] === "1"){
                dfs(i,j);
                answer++;
            }
        }
    }

    return answer;
};