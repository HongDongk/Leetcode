/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n === 2) return 1; 
    if (n === 3) return 2; 

    // 숫자를 최대한 3으로 나누는 것이 가장 유리하다.
    // 4가 남으면 2×2로 나누는 것이 더 이득

    let result = 1;

    while (n > 4) {
        result *= 3;
        n -= 3;
    }

    return result * n; 