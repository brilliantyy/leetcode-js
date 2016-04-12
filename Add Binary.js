/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var aLen = a.length;
    var bLen = b.length;
    var carry = 0, str = "", res, aNum, bNum, cNum;
    while(Math.max(aLen, bLen) > 0) {
        aNum = aLen > 0? a.charAt(aLen---1) -'0' : 0;
        bNum = bLen > 0? b.charAt(bLen---1) - '0' : 0;
        cNum = aNum + bNum + carry;
        str += (cNum % 2);
        carry = Math.floor(cNum / 2);
    }
    if (carry === 1)
        str += 1;
    res = Array.from(str).reverse().join("");
    return res;
};
