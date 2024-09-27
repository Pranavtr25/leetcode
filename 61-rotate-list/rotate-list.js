/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let size = 0;
    let node = head
    while(node){
        size++;
        node = node.next
    }
    if(k === 0 || size === 1){
        return head
    }
    let limit = k % size
    console.log(size)
    if(limit === 0){
        return head
    }
    // return 
    let count = 0;
    let res = null;
    while(count < limit){
        let curr = head
        let dummy = new ListNode(0)
        let dummyIterative = dummy
        if(!curr){
            return null
        }
        while(curr.next){
            dummyIterative.next = new ListNode(curr.val)
            dummyIterative = dummyIterative.next
            curr = curr.next
        }
        curr.next = dummy.next
        head = curr
        res = curr
        count++;
    }
    return res;
};