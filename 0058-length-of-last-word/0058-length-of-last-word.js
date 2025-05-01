/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let word = s.split(' ');
    console.log(word);
    for(let i = word.length-1; i>=0; i--){
        if(word[i] !== ''){
            return word[i].length;
        }
    }
};