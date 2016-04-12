/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str = str.trim();
    if (str.length === 0) {
        return "";
    }
    return str.split(/\s+/).reverse().join(' ');
};
