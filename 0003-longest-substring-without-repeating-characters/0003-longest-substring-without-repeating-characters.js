/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            // 중복이면 left부터 제거
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]); // 중복 없으면 추가
        maxLen = Math.max(maxLen, right - left + 1); // 길이 갱신
    }

    return maxLen;
};