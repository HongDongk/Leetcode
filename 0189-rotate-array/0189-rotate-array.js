/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    let front = nums.slice(nums.length-k);
    let back = nums.slice(0, nums.length-k);
    let result = [...front, ...back];

    for(let i=0; i<nums.length; i++){
        nums[i] = result[i]; 
    }

    return nums;
};