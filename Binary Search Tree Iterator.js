/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.stack = new Stack();
    this.curr = root;
    this.pushNodes(this.curr);
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return !this.stack.isEmpty();
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    var node = this.stack.pop();
    this.pushNodes(node.right);
    return node.val;
};

BSTIterator.prototype.pushNodes = function(curr) {
    while (curr) {
        this.stack.push(curr);
        curr = curr.left;
    }
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

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
