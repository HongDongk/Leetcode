/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase(); 

    let end = s.length-1;

    for(let i =0; i<s.length-1; i++){
        if(s[i] !== s[end]) return false;
        end--;
    }

    return true;
};