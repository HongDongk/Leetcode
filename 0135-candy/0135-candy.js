/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let answer = new Array(ratings.length).fill(1);

    for(let i = 1; i<ratings.length; i++){
        if(ratings[i] > ratings[i-1]){
            answer[i] = answer[i-1] + 1;
        }
    }

    for(let i = ratings.length-2; i>=0; i--){
        if(ratings[i] > ratings[i+1]){
            answer[i] = Math.max(answer[i], answer[i+1]+1);
        };
    }


    return answer.reduce((a,b) => a+b, 0);
};