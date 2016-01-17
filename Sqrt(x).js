/**
 * Beats 64.86%
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var begin = 0;
    var end = x;
    var mid, res;

    while(begin <= end) {
        mid = begin + Math.floor((end - begin) / 2);
        res = mid * mid;
        if (res === x) {
            return mid;
        } else if (res < x) {
            begin = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return end;
};
