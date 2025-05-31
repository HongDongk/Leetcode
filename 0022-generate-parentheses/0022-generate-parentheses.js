/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let answer = [];

    function dfs(current, open, close){
        if(current.length === 2*n){
            answer.push(current);
            return;
        }else{
            if(open < n){
                dfs(current+'(', open+1, close);
            }

            if(close < open){
                dfs(current+')', open, close+1);
            }
        }
    }


    dfs('', 0, 0);

    return answer;
};