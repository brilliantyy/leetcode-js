/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    var nodes = preorder.split(','),
        stack = new Stack();

    for (var i = 0, len = nodes.length; i < len; i++) {
        if (nodes[i] == '#') {
            while(!stack.isEmpty() && stack.top() == '#') {
                stack.pop();
                if (stack.isEmpty()) return false;
                stack.pop();
            }
            stack.push(nodes[i]);
        } else {
            stack.push(nodes[i]);
        }
    }

    return stack.size() === 1 && stack.top() == '#';
};

var Stack = function() {
    this.array = [];
};

Stack.prototype.push = function(x) {
    this.array.push(x);
};

Stack.prototype.pop = function() {
    if (!this.isEmpty()) {
        return this.array.pop();
    }
};

Stack.prototype.top = function() {
    if (!this.isEmpty()) {
        return this.array[this.array.length - 1];
    }
};

Stack.prototype.size = function() {
    return this.array.length;
};

Stack.prototype.isEmpty = function() {
    return this.array.length === 0;
};
