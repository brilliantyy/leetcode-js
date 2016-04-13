/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var m = num1.length,
        n = num2.length,
        pos = Array(m+n),
        res = "";

    for (var i = 0; i < m+n; i++)
        pos[i] = 0;

    for (var i = m - 1; i >= 0; i--) {
        for (var j = n - 1; j >= 0; j--) {
            var mul = (num1[i] - '0') * (num2[j] - '0');
            var p1 = i + j, p2 = i + j + 1;
            var sum = mul + pos[p2];

            pos[p1] += Math.floor(sum / 10);
            pos[p2] = sum % 10;
        }
    }

    for(var k = 0; k < pos.length; k++) {
        if (!(res.length === 0 && pos[k] === 0))
            res += pos[k];
    }
    return res.length === 0 ? '0' : res;
};
