/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    
    function reverse(a,b){
        while(a<=b){
            [nums[a],nums[b]] = [nums[b],nums[a]];
            a++;
            b--;
        }
    }

    reverse(0, nums.length-1);
    reverse(0, k-1);
    reverse(k, nums.length-1);
};