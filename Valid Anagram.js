/**
 * Beats 59.47 %
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var lenOne = s.length;
    var lenTwo = t.length;
    
    if (!lenOne && !lenTwo) {
        return true;
    } else if (lenOne != lenTwo) {
        return false;
    } else {
        var a = s.split('').sort().join();
        var b = t.split('').sort().join();
        if (a.indexOf(b) === 0) {
            return true;
        }
        return false;
    }
};