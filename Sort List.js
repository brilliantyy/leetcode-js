/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (head === null || head.next === null) return head;
    var mid = getMidNode(head);
    var first = head, second = mid.next;
    mid.next = null;
    return mergeList(sortList(first), sortList(second));
};
function getMidNode(head) {
    var slow = head, fast = head;
    while(fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function mergeList(first, second) {
    var head = new ListNode(-1);
    var curr = head;
    while(first !== null && second !== null) {
        if (first.val <= second.val) {
            curr.next = first;
            first = first.next;
        } else if (first.val > second.val) {
            curr.next = second;
            second = second.next;
        }
        curr = curr.next;
    }
    curr.next = (first === null) ? second : first;
    return head.next;
}
