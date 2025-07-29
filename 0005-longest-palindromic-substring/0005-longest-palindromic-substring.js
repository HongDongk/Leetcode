/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let dp = new Array(s.length).fill(0).map((a) => new Array(s.length).fill(false));
    let start = 0;
    let maxLen = 1;

    for(let i = 0; i<s.length; i++){
        dp[i][i] = true;
    }

    for(let i = 0; i<s.length-1; i++){
        if(s[i] === s[i+1]){
            dp[i][i+1] = true;
            start = i;
            maxLen = 2;
        }
    }

    for(let len = 3; len<s.length; len++){
        for(let i = 0; i<s.length-len; i++){
            let j = i + len - 1;
            if(dp[i+1][j-1] && s[i] === s[j]){
                dp[i][j] = true;
                if(len > maxLen){
                    start = i;
                    maxLen = len;
                }
            }
        }
    }

    return s.slice(start, start+maxLen);
};