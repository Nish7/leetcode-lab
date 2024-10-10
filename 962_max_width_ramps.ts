function maxWidthRamp(nums: number[]): number {
    // keep a track of the a montonic stack
    let stack: [number, number][] = [[nums[0], 0]]

    let maxWidthRamp = 0
    for (let i = 1; i < nums.length; i++) {
        const [headVal, _] = stack.at(-1)!
        const el = nums[i]

        if (el < headVal) {
            // if the element is < head of the stack then push the stack
            stack.push([el, i])
        } else {
            // if the element is >= head of the stack, calculate maxWidthRamp for each element in the stack
            let j = stack.length - 1
            while (j >= 0 && stack[j][0] <= el) {
                maxWidthRamp = Math.max(maxWidthRamp, i - stack[j][1])
                j--
            }
        }
    }

    return maxWidthRamp
}

console.log(maxWidthRamp([6, 0, 8, 2, 1, 5]))
console.log(maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1]))
