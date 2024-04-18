/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let l1 = headA
    let l2 = headB

    while(l1 != l2){  
        if(l1) l1 = l1.next 
        else l1 = headA // if null we reached the end of l1, start again from head
        if(l2) l2 = l2.next 
        else l2 = headB
    }   

    return l1
};
