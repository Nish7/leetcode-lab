// The approach: keep a track of a dynamic arrays of min, to capture the historical minimum and only append the min, if the new pushed value is a min.
// same when removing, if the current min is being removed, then remove from min stack
// this is min stack within a normal stack
// note: better and possibly faster approach: is to use a class Node. this node
class MinStack {
  stack: number[];
  min: number[];

  constructor() {
    this.stack = [];
    this.min = [Number.POSITIVE_INFINITY];
  }

  push(val: number): void {
    this.stack.push(val);

    if (Math.min(this.min[this.min.length - 1], val) == val) {
      this.min.push(val);
    }
  }

  pop(): void {
    let popVal = this.stack.pop();

    if (popVal == this.min[this.min.length - 1]) {
      this.min.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    // minimum element of the MinStack
    // [0, 1, 2, 1, 0 ,2]
    return this.min[this.min.length - 1];
  }
}

// Your MinStack object will be instantiated and called as such:
var obj = new MinStack();
obj.push(-2);
obj.push(2);
obj.push(1);
console.log(obj.getMin());
obj.pop();
console.log(obj.top());
console.log(obj.getMin());
