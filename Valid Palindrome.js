/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.trim().length === 0 || s.trim().length === 1) {
        return true;
    }
    s = s.replace(/[^A-Za-z\d]/g, "").toLowerCase();
    for (var i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s[i] !== s[j])
            return false;
    }
    return true;
};
