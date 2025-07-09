/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let answer = 0;

    while(start < end){
        let width = end - start;
        let h = Math.min(height[start], height[end]);
        answer = Math.max(width*h, answer);
        
        if( height[start] < height[end]){
            start++;
        }else{
            end--;
        }
    }

    return answer;
};