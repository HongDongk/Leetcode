/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    numbers = numbers.sort((a,b) => a-b);
    let start = 0;
    let end = numbers.length - 1;

    while(start<end){
        let sum = numbers[start] + numbers[end];

        if(sum === target) return [start+1, end+1];

        if(sum < target) start++;
        else if(sum > target) end--;
    }
};