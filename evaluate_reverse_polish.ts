// Approach: Keep pushing the numbers until the operator is found, then evaluate the expression based on the operator.
// push the result into the stack again

function evalRPN(tokens: string[]): number {
    const stack = new Array<number>();
    const operators = new Set<string>(['/', '+', '-', '*']);

    for (let op of tokens) {
        if (operators.has(op)) {
            stack.push(mathEval(stack.pop()!, stack.pop()!, op));
        } else {
            stack.push(parseInt(op));
        }
    }

    return stack[0];
}

function mathEval(n1: number, n2: number, op: string) {
    switch (op) {
        case '+':
            return n1 + n2;
        case '*':
            return n1 * n2;
        case '/':
            return Math.trunc(n2 / n1); // remove the fractional digits
        case '-':
            return n1 - n2;
        default:
            throw new Error('Invalid Operators: ' + op);
            break;
    }
}

// Test Case A:
// Input: tokens = ["1","2","+","3","*","4","-"]
// Output: 5
// Explanation: ((1 + 2) * 3) - 4 = 5

// ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
//  (-132   )

// Test Case B
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
