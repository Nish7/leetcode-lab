// Approach: loop from the end of the array; count the whites == swap operations
function minimumSteps(s: string): number {
    let res = 0
    let whites = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (parseInt(s[i]) == 1) {
            res = res + whites
        } else {
            whites++
        }
    }

    return res
}
