/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var stack = new Stack(), node = null, res = [];
    stack.push(root);

    while (!stack.isEmpty()) {
        node = stack.pop();

        if (node) {
            res.push(node.val);
            stack.push(node.right);
            stack.push(node.left);
        }
    }

    return res;
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

Stack.prototype.isEmpty = function() {
    return this.array.length === 0;
};
