class DoubleNodeB {
  val: number
  next?: DoubleNodeB
  prev?: DoubleNodeB
  constructor(val: number, next?: DoubleNodeB, prev?: DoubleNodeB) {
    this.val = val
    this.next = next
    this.prev = prev
  }
}

class MyCircularDeque {
  head?: DoubleNodeB
  tail?: DoubleNodeB
  size: number
  k: number

  constructor(k: number) {
    this.head = undefined
    this.tail = undefined
    this.size = 0
    this.k = k
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false
    let newNode = new DoubleNodeB(value)
    if (!this.tail && !this.head) {
      this.tail = newNode
      this.head = newNode
    } else {
      this.head!.next = newNode
      newNode.prev = this.head
      this.head = newNode
    }
    this.size++
    return true
  }

  // null <-> 1 (tail) <-> 2 <-> 3 (head) <-> null
  insertLast(value: number): boolean {
    if (this.isFull()) return false
    let newNode = new DoubleNodeB(value)
    if (!this.tail && !this.head) {
      this.tail = newNode
      this.head = newNode
    } else {
      this.tail!.prev = newNode
      newNode.next = this.tail
      this.tail = newNode
    }
    this.size++
    return true
  }

  // null <-> 0 (tail) <-> 2 <-> 3 (head) <-> null
  deleteFront(): boolean {
    if (this.isEmpty()) return false
    if (this.head == this.tail) {
      this.head = undefined
      this.tail = undefined
    }
    this.head = this.head?.prev
    if (this.head) {
      this.head!.next = undefined
    }
    this.size--
    return true
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false
    if (this.head == this.tail) {
      this.head = undefined
      this.tail = undefined
    }
    this.tail = this.tail?.next
    if (this.tail) {
      this.tail!.prev = undefined
    }
    this.size--
    return true
  }

  getFront(): number {
    return this.head?.val ?? -1
  }

  getRear(): number {
    return this.tail?.val ?? -1
  }

  isEmpty(): boolean {
    return this.size == 0 ? true : false
  }

  isFull(): boolean {
    return this.size == this.k ? true : false
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmp ty()
 * var param_8 = obj.isFull()
 */
