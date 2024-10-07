function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length
  let n = matrix[0].length
  let l = 0
  let r = m * n - 1

  while (l < n) {
    let mid = Math.floor((l + r) / 2)
    let idx = Math.floor(mid / n)
    let idy = mid % n
    let val = matrix[idx][idy]

    if (val == target) return true
    if (val > target) {
      r--
    } else if (val < target) {
      l++
    }
  }

  return false
}

// m * n - 1 = 12 - 1 = 11 max index
// 11 / 2 = 5.5 = 5 [2,0]
// m = 3
// n = 4
// 5 // 4 = 1
// 5 mod 4 = 1
// why does this wokr?
// [1, 0]
// 01 02 03 04 05
// [[1,2,3,4], [5,6,7,8], [10,11,12,13]]

// appraoch: flatten up the array and the do traditional binary search on the flattened array
// Approach b: do a binary search within the matrix row itself and then the elements in the row itself
