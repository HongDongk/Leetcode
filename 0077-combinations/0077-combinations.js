/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let answer = [];
    let temp = new Array(k).fill(0);

    function dfs(L,s){
        if(L === k){
            answer.push(temp.slice());
            return;
        }else{
            for(let i = s+1; i<=n; i++){
                temp[L] = i;
                dfs(L+1, i);
            }
        }

    }

    dfs(0,0);

    return answer;
};