/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let avg = new Set();
    let left = 0;
    let right = nums.length-1;

    while(left < right){
        avg.add((nums[left]+nums[right])/2);
        left++;
        right--;
    }

    return avg.size
};