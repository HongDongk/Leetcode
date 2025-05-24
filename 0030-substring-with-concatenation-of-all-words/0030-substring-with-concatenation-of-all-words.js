/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const wordLen = words[0].length; // 단어 하나의 길이
    const wordCount = words.length; // 단어 갯수
    const totalLen = wordLen * wordCount; // 합친단어 길이

    const wordMap = {};
    for (let word of words) {
        wordMap[word] = (wordMap[word] || 0) + 1;
    }

    const result = [];

    for (let i = 0; i <= s.length - totalLen; i++) {
        const seen = {};
        let j = 0;

        while (j < wordCount) {
            const wordStart = i + j * wordLen;
            const word = s.slice(wordStart, wordStart + wordLen);

            if (!wordMap[word]) break;

            seen[word] = (seen[word] || 0) + 1;

            if (seen[word] > wordMap[word]) break;

            j++;
        }

        if (j === wordCount) {
            result.push(i);
        }
    }

    return result;
};