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
var deleteDuplicates = function(head) {
    let obj = {}
    let curr = head
    while(curr){
        if(obj[curr.val]){
            obj[curr.val]++;
        }else{
            obj[curr.val] = 1;
        }
        curr = curr.next
    }
    let dummy = new ListNode(0, head)
    let node = dummy
    while(node.next){
        if(obj[node.next.val] !== 1){
            node.next = node.next.next
        }else{
            node = node.next
        }
    }
    return dummy.next
};