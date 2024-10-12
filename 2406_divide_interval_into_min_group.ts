function minGroups(intervals: number[][]): number {
    // keep a track of both sorted list of stant and end
    let start_list = [...intervals].map((a) => a[0]).sort((a, b) => a - b)
    let end_list = [...intervals].map((a) => a[1]).sort((a, b) => a - b)
    // loop for all start time'
    let end_pointer = 0
    let min_groups = 0
    for (let start_time of start_list) {
        // if e_start > end_times[end_pointer] endPointer++; we can re-use the same minGroups
        if (start_time > end_list[end_pointer]) end_pointer++
        else min_groups++
        // else increase the group_pointer
    }

    return min_groups
}

console.log(
    minGroups([
        [1, 3],
        [5, 6],
        [8, 10],
        [11, 13],
    ])
)
