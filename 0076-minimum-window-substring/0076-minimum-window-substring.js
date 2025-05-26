/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const need = {};
    for (let c of t) {
        need[c] = (need[c] || 0) + 1;
    }

    let left = 0;
    let minStart = 0;
    let minLen = Infinity;

    let missing = t.length;
    const window = {};

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        window[char] = (window[char] || 0) + 1;

        // 필요한 문자를 찾은 경우 missing 감소
        if (need[char] && window[char] <= need[char]) {
            missing--;
        }

        // 모든 문자를 찾은 경우 → 왼쪽 포인터 줄이기 시도
        while (missing === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            minLen = right - left + 1;
            minStart = left;
            const leftChar = s[left];
            window[leftChar]--;
            
            // while문 탈출
            if (need[leftChar] && window[leftChar] < need[leftChar]) {
                missing++;
            }

            left++;
        }
    }

    return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
};