/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var res = "1";
    while(--n > 0)
        res = convert(res);
    return res;
};

var convert = function(s) {
    var str = "";
    for (var i = 0, count = 0, len = s.length; i < len;) {
        while(i + count < len && s[i] === s[i+count])
            count++;
        str += count + s[i];
        i += count;
        count = 0;
    }
    return str;
}
