function minAddToMakeValid(s: string): number {
    // Different cases:
    // Negative:
    // (()
    // two open and two clsoe
    // calcaulate the imbalanced brackets --> 1
    // Valid:
    // (()))
    // ())))
    // two ope
    let stack = 0
    let imbalanced = 0

    for (let st of s) {
        if (st == '(') {
            stack++
        } else if (st == ')') {
            if (stack == 0) {
                imbalanced++
            } else {
                stack--
            }
        }
    }

    return stack + imbalanced
}
