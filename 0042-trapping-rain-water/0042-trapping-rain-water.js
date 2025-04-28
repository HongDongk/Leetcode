/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let answer = 0;
    let left = 0;
    let right = height.length-1;
    let leftmax = 0;
    let rightmax = 0;

    while(left<right){
        if(height[left] < height[right]){
            if(height[left] >= leftmax){
                leftmax = height[left];
            }else{
                answer += leftmax - height[left];
            }
            left++;
        }else{
            if(height[right] >= rightmax){
                rightmax = height[right];
            }else{
                answer += rightmax - height[right];
            }
            right--;
        }
    }

    return answer;
};