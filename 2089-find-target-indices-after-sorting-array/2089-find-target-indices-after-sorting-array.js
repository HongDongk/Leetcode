/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums = nums.sort((a,b) => a-b);
    let start = 0;
    let end = nums.length-1;
    let left = -1; 
    let right = -1;


    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid] === target){
            left = mid;
            end = mid-1;
        }else if(nums[mid] < target){
            start = mid+1;
        }else{
            end = mid -1;
        }
    };

    start = 0;
    end = nums.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid] === target){
            right = mid;
            start = mid+1;
        }else if(nums[mid] < target){
            start = mid+1;
        }else{
            end = mid -1;
        }
    };

    if (left === -1) return [];

    let result = [];
    for (let i = left; i <= right; i++) {
        result.push(i);
    }
    
    return result;
};