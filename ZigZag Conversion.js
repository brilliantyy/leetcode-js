/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1 || s.length <= numRows)
        return s;
    var result = "";
    var step = numRows * 2 - 2, len = s.length;

    for (var i = 0; i < len; i += step) {
        result += s[i];
    }

    for (i = 1; i < numRows - 1; i++) {
        for (var j = i; j < len; j += step) {
            result += s[j];
            if (j + step - 2 * i < len) {
                result += s[j + step - 2 * i];
            }
        }
    }

    for (i = numRows - 1; i < len; i += step) {
        result += s[i];
    }

    return result;
};
