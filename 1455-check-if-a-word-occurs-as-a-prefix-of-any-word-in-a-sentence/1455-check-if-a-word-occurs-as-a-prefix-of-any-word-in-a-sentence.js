/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    sentence =sentence.split(' ');

    for(let s of sentence){
        if(s.startsWith(searchWord)) return sentence.indexOf(s)+1;
    }

    return -1

};