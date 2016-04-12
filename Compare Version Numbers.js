/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var v1 = version1.split('.');
    var v2 = version2.split('.');

    if (v1.length !== v2.length) {
        var diff = Math.abs(v1.length - v2.length);
        var zeroes = Array.apply(null, Array(diff)).map(Number.prototype.valueOf, 0);
        if (v1.length > v2.length) {
            v2 = v2.concat(zeroes);
        } else {
            v1 = v1.concat(zeroes);
        }
    }
    for (var i = 0, len = v1.length; i < len; i++) {
        if (+v1[i] > +v2[i]) return 1;
        if (+v1[i] < +v2[i]) return -1;
    }
    return 0;
};
