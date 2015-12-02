/**
 * Beats 7.79 %
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
      var len = digits.length;
      var result = [];
      for (var i = len - 1, carry = 1; i >= 0; i--) {
          digits[i] += carry;
          carry = Math.floor(digits[i] / 10);
          digits[i] %= 10
      }
      i = 0;
      if (carry) {
        result[i++] = carry;
      }
      for(var j = 0; j < len; j++) {
        result[i++] = digits[j];
      }
      return result;
};