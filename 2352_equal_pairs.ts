function equalPairs(grid: number[][]): number {
    let row = new Map()
    let col = new Map()

    for (let i = 0; i < grid.length; i++) {
        // set the row
        row.set(grid[i].join(','), (row.get(grid[i].join(',')) ?? 0) + 1)

        // set the col
        const c: number[] = []

        for (let j = 0; j < grid[0].length; j++) {
            c.push(grid[j][i])
        }

        col.set(c.join(','), (col.get(c.join(',')) ?? 0) + 1)
    }

    let pairs = 0

    // compare the row and col
    for (let k of row.keys()) {
        if (col.has(k)) {
            pairs += col.get(k) * row.get(k)
        }
    }

    return pairs
}

console.log(
    equalPairs([
        [3, 2, 1],
        [1, 7, 6],
        [2, 7, 7],
    ])
)

console.log(
    equalPairs([
        [11, 1],
        [1, 11],
    ])
)

console.log(
    equalPairs([
        [3, 1, 2, 2],
        [1, 4, 4, 5],
        [2, 4, 2, 2],
        [2, 4, 2, 2],
    ])
)

// rows: '321', '176' ,'277'
// col: '312' , '277', '167'

// rows: 3122 1445 2422 2552
// col: 3122 1444 2425 2422
// pairs = 3
