/**
 * Beats 43.40 %
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var len = strs.length;
    var MIN_LEN = Number.MAX_VALUE;
    
    if (!len) return "";
    else if (len == 1) return strs[0];
    
    for (var i = 0; i < len - 1; i++) {
        var index = findCommon(strs[i], strs[i+1]);
        if (index < MIN_LEN) {
            MIN_LEN = index;
        }
    }
    return strs[0].substr(0, MIN_LEN);
};

var findCommon = function(strOne, strTwo) {
    var i = 0;
    var j = 0, k = 0;
    var lenOne = strOne.length, lenTwo = strTwo.length;
    
    while ((strOne[j] == strTwo[k]) && j < lenOne && k < lenTwo) {
        j++;
        k++;
        i++;
    }
    return i;
}
