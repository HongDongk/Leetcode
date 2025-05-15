/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    let line = [];
    let lineLength = 0;  // 현재 줄의 단어들의 총 길이 (공백 제외)
    
    for (const word of words) {
        // 이 단어를 현재 줄에 추가할 수 있는지 확인
        if (lineLength + word.length + line.length <= maxWidth) {
            line.push(word);
            lineLength += word.length;
        } else {
            // 현재 줄 포맷팅하여 결과에 추가
            result.push(formatLine(line, lineLength, maxWidth, false));
            line = [word];
            lineLength = word.length;
        }
    }
    
    // 마지막 줄 처리 (왼쪽 정렬)
    if (line.length > 0) {
        result.push(formatLine(line, lineLength, maxWidth, true));
    }
    
    return result;
};

// 줄 포맷팅 함수
function formatLine(line, lineLength, maxWidth, isLastLine) {
    // 한 단어만 있거나 마지막 줄인 경우 - 왼쪽 정렬
    if (line.length === 1 || isLastLine) {
        return line.join(' ') + ' '.repeat(maxWidth - lineLength - (line.length - 1));
    }
    
    // 필요한 총 공백 수
    const totalSpaces = maxWidth - lineLength;
    // 단어 사이의 간격 수
    const gaps = line.length - 1;
    // 각 간격에 들어갈 기본 공백 수
    const spacesPerGap = Math.floor(totalSpaces / gaps);
    // 추가 공백이 필요한 간격의 수 (왼쪽부터)
    const extraSpaces = totalSpaces % gaps;
    
    let result = '';
    
    for (let i = 0; i < line.length; i++) {
        result += line[i];
        
        // 마지막 단어 이후에는 공백을 추가하지 않음
        if (i < line.length - 1) {
            // 현재 간격에 추가할 공백 수
            const spaces = spacesPerGap + (i < extraSpaces ? 1 : 0);
            result += ' '.repeat(spaces);
        }
    }
    
    return result;
}