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
var insertionSortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    var sortedHead = head, sortedTail = head;
    head = head.next;
    sortedHead.next = null;

    while(head !== null) {
        var temp = head;
        head = head.next;
        temp.next = null;

        if (temp.val <= sortedHead.val) {
            temp.next = sortedHead;
            sortedTail = sortedHead.next === null ? sortedHead : sortedTail;
            sortedHead = temp;
        } else if (temp.val >= sortedTail.val) {
            sortedTail.next = temp;
            sortedTail = sortedTail.next;
        } else {
            var cur = sortedHead;
            while (cur.next !== null && cur.next.val < temp.val) {
                cur = cur.next;
            }
            temp.next = cur.next;
            cur.next = temp;
        }
    }
    return sortedHead;
};
