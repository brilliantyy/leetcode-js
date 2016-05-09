/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    var nodes = preorder.split(',');
    var diff = 1;    /* diff = outdegree - indegree */

    for (var i = 0, len = nodes.length; i < len; i++) {
        if (--diff < 0) return false;
        if (nodes[i] !== '#') diff += 2;
    }
    return diff === 0;
};
