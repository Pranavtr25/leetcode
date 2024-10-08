/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let curr1 = l1
    let curr2 = l2
    let list;
    let count = 0;
    let bal = 0;
    let curr;
    while (curr1?.val !== undefined && curr2?.val !== undefined) {
        if (count === 0) {
            list = new ListNode((curr1.val + curr2.val) % 10)
            bal = Math.floor((curr1.val + curr2.val) / 10)
            curr = list
        } else {
            curr.next = new ListNode((curr1?.val + curr2?.val + bal) % 10)
            bal = Math.floor((curr1?.val + curr2?.val + bal) / 10)
            curr = curr?.next
        }
        count++;
        curr1 = curr1?.next
        curr2 = curr2?.next
    }
    while (curr1?.val !== undefined) {
        curr.next = new ListNode((curr1.val + bal) % 10)
        bal = Math.floor((curr1.val + bal) / 10)
        curr = curr?.next
        count++;
        curr1 = curr1?.next
    }
    while (curr2?.val !== undefined) {
        curr.next = new ListNode((curr2.val + bal) % 10)
        bal = Math.floor((curr2.val + bal) / 10)
        curr = curr?.next
        count++;
        curr2 = curr2?.next
    }
    if (bal) {
        curr.next = new ListNode(bal)
    }
    return list;
};