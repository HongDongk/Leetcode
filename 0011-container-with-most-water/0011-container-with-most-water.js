/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let answer = 0;
    let start = 0;
    let end = height.length-1;

    while(start<end){
        answer = Math.max(answer, (end-start) * Math.min(height[start], height[end]));
        
        if(height[start] < height[end]){
            start++;
        }else{
            end--;
        }
    }

    return answer;
};