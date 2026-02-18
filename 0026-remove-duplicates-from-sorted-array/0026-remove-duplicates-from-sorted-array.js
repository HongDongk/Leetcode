/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0;
    let temp;

    for(let i = 0; i<nums.length; i++){
        console.log(temp);
        if(nums[i] !== temp){
            temp = nums[i];
            nums[count] = nums[i];
            count++;
        }
    }

    console.log(nums);

    return count;
};