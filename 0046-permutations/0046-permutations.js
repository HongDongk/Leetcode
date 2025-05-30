/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let answer = [];
    let temp = new Array(nums.length).fill(0);
    let check = new Array(nums.length).fill(false);

    function dfs(L){
        if(L === nums.length){
            answer.push(temp.slice());
            return;
        }else{
            for(let i =0; i<nums.length; i++){
                if(!check[nums[i]]){
                    check[nums[i]] = true;
                    temp[L] = nums[i];
                    dfs(L+1);
                    check[nums[i]] = false;
                }
            }
        }
    }

    dfs(0);

    return answer;
};