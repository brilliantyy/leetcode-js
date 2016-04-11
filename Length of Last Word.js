/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s || s.trim().length === 0) {
        return 0;
    }
    s = s.trim().replace(/\s+/g, ' ');
    var result = s.substr(s.lastIndexOf(' ') + 1).length;
    return result;
};
