import { ListNode } from './list_node';

// problem: Given the head of a linked list, remove the nth node from the end of the list and return its head.
// reverse the linked list , remove the node and then reverse the head again
// Eval: the process was fine and works; bt very ineffecient in reversing the list twice
// Approach:  Better one; use a two pointer technique; slow and fast; create a gap and make the fast one reach till the the end and then slow will be pointing one behind the node to remove.
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	const dummy = new ListNode(0, head);
	let fast: ListNode | null = dummy;
	let slow: ListNode | null = dummy;

	// reach the fast til n
	let cnt = 1;
	while (cnt != n) {
		fast = fast!.next;
		cnt++;
	}

	console.debug(fast);
	// move both slow and fast together; as we have them seperated by the -n distance from the end
	while (fast) {
		slow = slow!.next;
		fast = fast!.next;
	}

	// remove the node from the post slow
	slow!.next = slow!.next!.next;

	return dummy;
}
