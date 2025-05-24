/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let info = {};
    let answer = [];

    for(let i =0; i<words.length; i++){
        if(info[words[i]]){
            info[words[i]] += 1;
        }else{
            info[words[i]] = 1;
        }
    }


    for(let i =0; i<=s.length-(words[0].length*words.length); i++){
        let seen = {};
        let j = 0;

        while(j < words.length){
            let start = i + j*words[0].length;
            let word = s.slice(start, start+words[0].length);

            if(!info[word]) break;

            seen[word] = (seen[word] || 0) + 1;

            if(seen[word] > info[word]) break;
            
            j++;
        }

        if(j === words.length){
            answer.push(i);
        }
    }

    return answer;
};