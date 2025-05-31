/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let answer = 0;
    let checkcol = new Set();
    let checkrightcross = new Set();
    let checkleftcross = new Set();

    function dfs(L){
        if(L === n){
            answer++;
            return;
        }else{
            for(let i =0; i<n; i++){
                if (!checkcol.has(i) && !checkrightcross.has(L - i) && !checkleftcross.has(L + i)) {
                    checkcol.add(i);
                    checkrightcross.add(L - i);
                    checkleftcross.add(L + i);

                    dfs(L+1);    

                    checkcol.delete(i);
                    checkrightcross.delete(L - i);
                    checkleftcross.delete(L + i);
                }
            }
        }
    }

    dfs(0);

    return answer;
};