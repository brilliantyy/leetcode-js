/**
 * @constructor
 */
var Queue = function() {
    this.queue = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    if (this.queue.length > 0)
        this.queue.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    if (this.queue.length > 0) {
        return this.queue[0];
    }
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.queue.length === 0 ? true : false;
};
