// traverse the head by k times. reverse the group
// base case: if the number of the element in the head is less than k, return the head
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let count = 0
  let curr = head
  while (curr) {
    count++
    curr = curr.next
  }

  if (count >= k) {
    let curr = head
    let prev = null
    for (let i = 0; i < k; i++) {
      let next = curr!.next
      curr!.next = prev
      prev = curr
      curr = next
    }

    head!.next = reverseKGroup(curr, k)
    return prev
  }

  return head
}
