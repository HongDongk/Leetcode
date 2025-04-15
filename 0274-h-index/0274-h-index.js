/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let answer = 0;

    for(let i =0; i<=Math.max(...citations); i++){
        if(i <= citations.filter((a) => a>=i).length){
            answer = Math.max(answer, i);
        }
    }

    return answer;   
};
