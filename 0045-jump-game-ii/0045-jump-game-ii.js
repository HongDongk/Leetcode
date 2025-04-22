/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let answer = 0;
    let maxfar = 0;
    let nowfar = 0;

    for(let i =0; i<nums.length-1; i++){
        maxfar = Math.max(maxfar, i+nums[i]);

        if(i === nowfar){
            answer++;
            nowfar = maxfar;
        }
    }

    return answer;
};