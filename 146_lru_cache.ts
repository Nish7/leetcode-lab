class DoubleNode {
  key: number
  val: number
  next?: DoubleNode
  prev?: DoubleNode
  constructor(key: number, val: number, next?: DoubleNode, prev?: DoubleNode) {
    this.key = key
    this.val = val
    this.next = next
    this.prev = prev
  }
}

class LRUCache {
  readonly capacity: number
  map: Map<number, DoubleNode>
  right?: DoubleNode
  left?: DoubleNode

  constructor(capacity: number) {
    this.capacity = capacity
    this.map = new Map<number, DoubleNode>()
    this.left = new DoubleNode(0, 0)
    this.right = new DoubleNode(0, 0)
    this.left.next = this.right
    this.right.prev = this.left
  }

  insert(node: DoubleNode) {
    node.next = this.right
    node.prev = this.right!.prev
    this.right!.prev!.next = node
    this.right!.prev = node
  }

  // remove node from list
  remove(node: DoubleNode) {
    if (node.prev) node.prev.next = node.next
    if (node.next) node.next.prev = node.prev
  }

  get(key: number): number {
    if (this.map.has(key)) {
      this.remove(this.map.get(key)!)
      this.insert(this.map.get(key)!)
      return this.map.get(key)!.val
    }

    return -1
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      this.map.get(key)!.val = value
      this.remove(this.map.get(key)!)
    }

    this.map.set(key, new DoubleNode(key, value))
    this.insert(this.map.get(key)!)

    if (this.map.size > this.capacity) {
      const lru = this.left!.next
      this.remove(lru!)
      this.map.delete(lru!.key)
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
