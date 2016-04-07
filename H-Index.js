/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if (citations.length === 0) return 0;
    if (citations.length === 1) {
        return citations[0] === 0 ? 0 : 1;
    }

    var len = citations.length, result;
    citations.sort(function(a, b) {
        return (b - a);
    });

    if (citations[len - 1] >= len) return len;

    for (var i = 0; i < len; i++) {
        if (citations[i] < i+1) {
            result = i;
            break;
        }
    }
    return result;
};
