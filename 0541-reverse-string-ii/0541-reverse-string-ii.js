/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let array = s.split('');

    for(let i =0; i<array.length; i += 2*k){
        let start = i;
        let end = Math.min(i+k-1, array.length-1);

        while(start < end){
            let temp = array[start];
            array[start] = array[end];
            array[end] = temp;
            start++;
            end--;
        }
    }

    return array.join('');
};