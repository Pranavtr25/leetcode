/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(!head.next){
        return null
    }
    let slow = head
    let prev = new ListNode("dummy", head)
    let fast = head
    while(fast?.next){
        slow = slow.next
        prev = prev?.next
        fast = fast.next?.next
    }
    prev.next = prev.next.next
    return head;
};