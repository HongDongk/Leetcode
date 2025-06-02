/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let check = new Array(board.length).fill(0).map((a) => new Array(board[0].length).fill(false));

    function dfs(L, x, y){
        if(L === word.length) return true;

        if(x<0 || y<0 || x>=board.length || y>=board[0].length || board[x][y] !== word[L] || check[x][y]){
            return false;
        }

        check[x][y] = true;

        let result = dfs(L+1, x, y+1) || dfs(L+1, x+1, y) || dfs(L+1, x-1, y) || dfs(L+1, x, y-1);
        
        check[x][y] = false;

        return result;
    }


    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};