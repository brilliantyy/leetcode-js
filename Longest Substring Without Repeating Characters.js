/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s === null || s.length === 0)
        return 0;

    var maxLen = 1, leftMostIndex = 0, len = s.length;
    for (var i = 1; i < len; i++) {
        leftMostIndex = getLeftMostDistinctIndex(leftMostIndex, i, s);
        maxLen = Math.max(maxLen, i - leftMostIndex + 1);
    }
    return maxLen;
};

var getLeftMostDistinctIndex = function(leftIndex, currentIndex, str) {
    for (var i = currentIndex - 1; i >= leftIndex; i--) {
        if (str[i] === str[currentIndex])
            return i + 1;
    }
    return leftIndex;
}
