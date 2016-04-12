/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var sep = path.split('/');
    var stack = [];

    for (var e in sep) {
        if (sep[e] === "") continue;
        if (sep[e] === ".") continue;
        if (sep[e] === "..") stack.pop();
        else stack.push(sep[e]);
    }
    return '/' + stack.join('/');
};
