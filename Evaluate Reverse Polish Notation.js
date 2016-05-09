/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var stack = new Stack(), op1, op2;

    for (var i = 0, len = tokens.length; i < len; i++) {
        switch (tokens[i]) {
            case '+' :
                op2 = stack.pop();
                op1 = stack.pop();
                stack.push(op1 + op2);
                break;
            case '-' :
                op2 = stack.pop();
                op1 = stack.pop();
                stack.push(op1 - op2);
                break;
            case '*' :
                op2 = stack.pop();
                op1 = stack.pop();
                stack.push(op1 * op2);
                break;
            case '/' :
                op2 = stack.pop();
                op1 = stack.pop();
                if (op1 % op2 !== 0 && (op1 / op2) < 0) {
                    stack.push(Math.floor(op1 / op2) + 1);
                } else {
                    stack.push(Math.floor(op1 / op2));
                }
                break;
            default :
                stack.push(parseInt(tokens[i]));
                break;
        }
    }

    return parseInt(stack.pop());
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
