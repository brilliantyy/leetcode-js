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
var inorderTraversal = function(root) {
    var res = [], stack = new Stack(), curr = root;

    while (curr || !stack.isEmpty()) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
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
