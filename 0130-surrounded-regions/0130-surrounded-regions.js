/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {

    let n = board.length;
    let m = board[0].length;
    let dx = [-1,0,1,0];
    let dy = [0,1,0,-1];

    function dfs(x,y){
        if(x<0 || y<0 || x>=n || y>=m || board[x][y] !== 'O') return;

        board[x][y] = 'T';

        for(let i =0; i<4; i++){
            dfs(x+dx[i], y+dy[i]);
        }
    }

    // 양옆 가장자리
    for(let i = 0; i<n; i++){
        if(board[i][0] === 'O') dfs(i,0);
        if(board[i][m-1] === 'O') dfs(i,m-1);
    } 

    // 위,아래 가장자리
    for(let i = 0; i<m; i++){
        if(board[0][i] === 'O') dfs(0,i);
        if(board[n-1][i] === 'O') dfs(n-1,i);
    } 


    for(let i =0; i<board.length; i++){
        for(let j = 0; j<board[0].length; j++){
            if(board[i][j] === 'T') board[i][j] = 'O';
            else if(board[i][j] === 'O') board[i][j] = 'X';
        }
    }

    return board;
};