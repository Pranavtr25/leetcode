/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode("dummy", head)
    let prev = dummy
    let curr = head
    let count = 0;
    while(curr){
        if(curr.val === val){
            prev.next = prev.next.next
        }else{
            prev = prev.next
        }
        curr = curr.next
    }
    return dummy.next
};