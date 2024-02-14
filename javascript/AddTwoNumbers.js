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
var addTwoNumbers = function(l1, l2) {
    const iter = (n1, n2, rest = 0) => {
        if (!n1 && !n2 && !rest) return null;
        const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
        const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
        return new ListNode(newVal % 10, nextNode);
    }
    return iter(l1, l2);
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

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
var addTwoNumbers = function(l1, l2) {
    let aux = l1;
    let l1Number = '';
    let l2Number = '';
    let result = null;

    while (aux !== null) {
        l1Number += aux.val;
        aux = aux.next;
    }

    aux = l2;

    while (aux !== null) {
        l2Number += aux.val;
        aux = aux.next;
    }

    const sumL1L2Reverse = parseInt(l1Number.split('').reverse().join('')) + parseInt(l2Number.split('').reverse().join(''));
    const sumResult = sumL1L2Reverse.toString().split('');

    for (let i in sumResult) {
        const currentValue = new ListNode(sumResult[i], null);
        if (result === null) {
            result = currentValue;
        } else {
            let aux = result;
            result = new ListNode(sumResult[i], aux);
        }
    }

    return result;
};

console.log(addTwoNumbers(l1, l2));
