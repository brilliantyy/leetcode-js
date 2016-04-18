/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];
    generate(result, "", n, n);
    return result;
};

var generate = function (arr, s, left, right) {
    if (left === 0 && right === 0) {
        arr.push(s);
        return;
    }
    if (left > 0) {
        generate(arr, s + '(', left - 1, right);
    }
    if (right > left) {
        generate(arr, s + ')', left, right- 1);
    }
}
