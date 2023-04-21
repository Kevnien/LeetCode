function isPalindrome(head: ListNode | null): boolean {
    if (head.next === null) {
        return true;
    }
    let halfWayNode: ListNode = findHalfWayNode(head);
    
    halfWayNode = reverseLinkedList(halfWayNode);
    while (halfWayNode) {
        if (head.val !== halfWayNode.val) {
            return false;
        }
        head = head.next;
        halfWayNode = halfWayNode.next;
    }
    return true;
};

function findHalfWayNode(head: ListNode): ListNode | null {
    let slowNode: ListNode = head, fastNode: ListNode | null = head;
    while (fastNode.next?.next) {
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    return slowNode.next;
}

function reverseLinkedList(head: ListNode): ListNode {
    let node: ListNode = head, prevNode: ListNode | null = null;
    while (node) {
        const nextTemp: ListNode | null = node.next;
        node.next = prevNode;
        prevNode = node;
        node = nextTemp;
    }
    return prevNode;
}
