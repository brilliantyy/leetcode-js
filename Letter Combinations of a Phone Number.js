/**

Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"

Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.

*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    var resArr = [""];
    var digitsLen = digits.length;
    var charMap = ['0', '*', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    if (!digitsLen) return [];

    for (var i = 0; i < digitsLen; i++) {
        var tempArr = [];
        var chars = charMap[digits[i] - '0'];
        if (chars == '0') return [];
        for (var j = 0; j < chars.length; j++) {
            for (var k = 0; k < resArr.length; k++) {
                tempArr.push(resArr[k] + chars[j]);
            }
        }
        resArr = tempArr;
    }
    return resArr;
};
