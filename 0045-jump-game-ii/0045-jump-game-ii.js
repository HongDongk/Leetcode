/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let answer = 0;
    let end = 0;
    let farthest = 0;

    for(let i =0; i<nums.length-1; i++){
        farthest = Math.max(nums[i] + i, farthest);
        if(i === end){
            answer++;
            end = farthest;
        } 
    }

    return answer;
};