/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let newarray = matrix.flat();
    let start = 0;
    let end = newarray.length-1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(newarray[mid] === target) return true;

        if(newarray[mid] < target){
            start = mid+1;
        }else{
            end = mid-1;
        }
    }

    return false;
};