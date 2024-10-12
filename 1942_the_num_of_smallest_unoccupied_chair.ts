function smallestChair(times: number[][], targetFriend: number): number {
    let levTime = new Array(times.length).fill(-1)
    let ta = times[targetFriend][0]

    times.sort((a, b) => a[0] - b[0])

    for (let [arv, lev] of times) {
        let i = 0
        while (levTime[i] > arv) i++
        if (ta == arv) return i
        levTime[i] = lev
    }

    return -1
}

console.log(
    smallestChair(
        [
            [1, 4],
            [2, 3],
            [4, 6],
        ],
        1
    )
)

console.log(
    smallestChair(
        [
            [3, 10],
            [1, 5],
            [2, 6],
        ],
        0
    )
)
