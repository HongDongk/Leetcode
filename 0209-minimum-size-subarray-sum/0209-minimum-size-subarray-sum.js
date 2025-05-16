/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0;
    let sum = 0;
    let answer = Infinity;

    for(let i =0; i<nums.length; i++){
        sum += nums[i];
        while(sum >= target){
            answer = Math.min(answer, i-start+1)
            sum -= nums[start];
            start++;
        }
    }

    return answer === Infinity ? 0 : answer;
};