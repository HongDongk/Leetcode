/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];
    
    const digitToChar = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    };
    let answer = [];
    function dfs(L, path){
        if(L === digits.length){
            answer.push(path);
            return;
        }else{
            for(let word of digitToChar[digits[L]]){
                dfs(L+1, path+word);
            }
        }
    }

    dfs(0, "");

    return answer;
};