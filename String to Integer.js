/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();

    var res = 0, flag = 1;
    var i = 0, len = str.length, tmp;
    if (len === 0) return 0;

    if (str[i] === '-') {
        i++;
        flag = -1;
    } else if (str[i] === '+'){
        i++;
    }

    for(; i < len; i++){
        if (str[i] < '0' || str[i] > '9'){
            break;
        }
        tmp = res *10 + (str[i] - '0');
        if (tmp > (2147483647) || tmp < (-2147483648)) {
            if (flag === 1) {
                return 2147483647;
            } else {
                return -2147483648;
            }
        }
        res = tmp;
    }
    return res * flag;
};
