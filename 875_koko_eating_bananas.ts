function minEatingSpeed(piles: number[], h: number): number {
    // Apprach: search thorugh the [1, max(piles)]. if any of the speed mathces isFeasible condition then put up at the end of the bound
    let left = 1
    let right = Math.max(...piles)

    function isFeasible(speed: number): Boolean {
        console.log(speed)
        return piles.reduce((acc, e) => Math.ceil(e / speed) + acc, 0) <= h
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (isFeasible(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}

console.log(minEatingSpeed([3, 6, 7, 11], 8))
