function minSwaps(s: string): number {
    let imbalanced = 0

    for (let st of s) {
        if (st == '[') {
            imbalanced++
        } else if (st == ']' && imbalanced > 0) {
            imbalanced--
        }
    }

    return imbalanced % 2 == 0 ? imbalanced / 2 : (imbalanced + 1) / 2
}

console.log(minSwaps(']]][[['))
