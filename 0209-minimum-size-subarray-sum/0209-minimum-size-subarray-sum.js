/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let answer = Infinity;
    let left = 0;
    let sum = 0;

    for(let i = 0; i<nums.length; i++){
        sum += nums[i];

        while(sum >= target){
            answer = Math.min(answer, i-left+1);
            sum -= nums[left];
            left++;
        }
    }

    return answer === Infinity ? 0 : answer
};