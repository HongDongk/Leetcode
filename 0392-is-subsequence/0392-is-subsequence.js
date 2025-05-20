/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let start = 0;
    
    for(let i =0; i<t.length; i++){
        if(t[i] === s[start]){
            start += 1;
        }
    }

    return start === s.length ? true: false
};