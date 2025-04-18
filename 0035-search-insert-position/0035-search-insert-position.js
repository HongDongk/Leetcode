/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let answer;
    let temp;
    let start = 0;
    let end = nums.length-1;

    while(start <= end){
        let mid = parseInt((start+end)/2);
        if(nums[mid] === target){
            answer = mid
            break;
        }else if(nums[mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }

    return start;
};