function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // merge 2 list at a time // until only one linked list remains
  if (lists.length == 0) return null

  while (lists.length > 1) {
    let temp = []
    for (let i = 0; i < lists.length; i += 2) {
      temp.push(mergeList(lists[i], lists.at(i + 1) ?? null))
    }
    lists = temp
  }

  return lists[0]
}

function mergeList(
  listA: ListNode | null,
  listB: ListNode | null
): ListNode | null {
  let dummyNode = new ListNode(0)
  let curr = dummyNode

  while (listA && listB) {
    if (listA.val > listB.val) {
      curr.next = listB
      listB = listB.next!
    } else {
      curr.next = listA
      listA = listA.next!
    }

    curr = curr.next
  }

  curr.next = listA != null ? listA.next : listB
  return dummyNode.next
}
