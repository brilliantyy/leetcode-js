/**
 * Beats 66.05 %
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
    if (n === 1) return true;
    if (n <= 0) return false;
    
    var res = n & 1;
    
    while (!res) {
        n = n >> 1;
        res = n & 1;
    }
    
    return (n > 1)? false : true;
    
};