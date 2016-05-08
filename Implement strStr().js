/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0;
    } else if (haystack.length === 0 || needle.length > haystack.length) {
        return -1;
    }

    var hayLen = haystack.length, ndLen = needle.length;

    for (var i = 0; ; i++) {
        for (var j = 0; ; j++) {
            if (j === ndLen) return i;
            if (i + j === hayLen) return -1;
            if (haystack[i + j] !== needle[j]) break;
        }
    }
};
