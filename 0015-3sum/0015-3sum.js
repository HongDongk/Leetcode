/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;  // 중복 제거

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                // // 같은 값 건너뛰기 (중복 제거)
                // while (left < right && nums[left] === nums[left + 1]) left++;
                // while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;  // 합이 작으면 더 큰 수로
            } else {
                right--; // 합이 크면 더 작은 수로
            }
        }
    }

    return result;

};