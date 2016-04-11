/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s === null  || s.length === 0) {
        return true;
    }

    var stack = [];
    for (var i = 0, len = s.length; i < len; i++) {
        var bracket = s.charAt(i);
        if (bracket === '(' || bracket === '{' || bracket === '[') {
            stack.push(bracket);
        } else if (bracket === ')' || bracket === '}' || bracket === ']') {
            var top = stack.pop();
            if ((top === '(' && bracket === ')') || (top === '{' && bracket === '}') || (top === '[' && bracket === ']')) {
                continue;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return stack.length === 0;
};
