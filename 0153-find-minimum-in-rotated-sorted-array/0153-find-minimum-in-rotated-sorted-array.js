/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        let mid = Math.floor((left + right) / 2);
    
        if (nums[mid] > nums[right]) {
            // mid가 right보다 크면, 최솟값은 mid의 오른쪽에 있음
            // 예: [3,4,5,1,2]에서 mid=5, right=2인 경우
            left = mid + 1;
        } else {
            // mid가 right보다 작거나 같으면, 최솟값은 mid 포함 왼쪽에 있음
            // 예: [5,1,2,3,4]에서 mid=2, right=4인 경우
            right = mid;
        }
    }

    return nums[left];
};