/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 0;
    let end = x;

    while(start<=end){
        let mid = Math.floor((start+end)/2);
        console.log(start, mid, end)
        if(mid * mid === x) return mid;
        else if(mid * mid < x) start = mid+1;
        else end = mid -1;
    }

    return end;
};