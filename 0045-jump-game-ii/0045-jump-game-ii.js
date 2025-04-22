/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let answer = 0;
    let maxx = 0;
    let currentmax = 0;

    for(let i =0; i<nums.length-1; i++){
        maxx = Math.max(maxx, i+nums[i]);
        if(i === currentmax){
            answer++;
            currentmax = maxx;
        }
    }

    return answer;
};