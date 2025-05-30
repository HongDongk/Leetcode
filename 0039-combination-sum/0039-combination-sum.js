/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let answer = [];
    let temp = [];

    function dfs(sum, s){
        if(sum > target) return;
        if(sum === target){
            answer.push(temp.slice());
            return;
        }else{
            for(let i =s; i<candidates.length; i++){
                temp.push(candidates[i]);
                sum+=candidates[i];
                dfs(sum, i);
                sum-=candidates[i];
                temp.pop();
            }
        }
    }

    dfs(0, 0);

    return answer;
};