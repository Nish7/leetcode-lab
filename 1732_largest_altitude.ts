function largestAltitude(gain: number[]): number {
    let alt = 0
    let max = 0

    for (let g of gain) {
        alt += g
        max = Math.max(max, alt)
    }

    return max
}
