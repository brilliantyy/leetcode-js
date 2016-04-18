/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    var len = s.length;
    if (len === 0 || s[0] === '0') return 0;

    var l1 = 1, l2 = 1;
    for (var i = 1; i < len; i++) {
        if (s[i] === '0') l1 = 0;

        if (s[i - 1] === '1' || s[i - 1] === '2' && s[i] <= '6') {
            l1 = l1 + l2;
            l2 = l1 - l2;
        } else {
            l2 = l1;
        }
    }
    return l1;
};
