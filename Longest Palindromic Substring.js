/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) {
        return s;
    }

    var maxLen = 1, startPos = 0, len = s.length, i, j ,k;
    for (i = 0; i < len; i++) {
        j = i;
        k = i;
        while(k < len - 1 && s[k] === s[k+1]) {
            k++;
        }

        while(j > 0 && k < len - 1 && s[j - 1] === s[k + 1]) {
            k++;
            j--;
        }

        if (k - j + 1 > maxLen) {
            maxLen = k - j + 1;
            startPos = j;
        }
    }
    return s.substr(startPos, maxLen);
};
