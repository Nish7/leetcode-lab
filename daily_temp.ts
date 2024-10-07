// You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.
// Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.
// Example 1:
// Input: temperatures = [30,38,30,36,35,40,28]
// Output: [1,4,1,2,1,0,0]

// Push 30 in stack
// Compare 38 > 30 then pop 30 from the stack
// Push 38 in stack
// Compare 30 > 38; no
// Push 30 in the stack
// Compare 36 > 30; then pop 30 from the stack
// Compare rest of the stack; 36 > 38; no
// Push 36 in the stack
// ...

// Monotonic Stack Approach
// go through each number and compare the number the number with value with stack tail values.
// if it is less than
function dailyTemperatures(temperaturs: number[]) {
    const res: number[] = Array(temperaturs.length).fill(0); // res: [0,0,0,0,0]
    const stack: { idx: number; val: number }[] = [
        { idx: 0, val: temperaturs[0] },
    ];

    for (let i = 1; i < temperaturs.length; i++) {
        const cur = temperaturs[i];

        while (stack.length > 0 && cur > stack.at(-1)!.val) {
            const popValIdx = stack.pop()?.idx!;
            res[popValIdx] = i - popValIdx;
        }

        stack.push({ idx: i, val: cur });
    }

    return res;
}

console.log(dailyTemperatures([30, 38, 30, 36, 35, 40, 28]));
console.log(dailyTemperatures([1, 2, 3, 4, 5]));
