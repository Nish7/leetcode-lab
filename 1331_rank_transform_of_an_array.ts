// oct 1, 2024 - daily question
// requirements: [40,10,20,30]
// convert into an rank array : [4, 1, 2, 3]
// Approach:
//  - sort the array -> get the sorted array
//  - [10,20,30,40]
//  - [4, 3, 2, 1]
function arrayRankTransform(arr: number[]): number[] {
  let map = new Map<number, number>()
  let set = new Set(arr)
  let sortedSet = [...set].sort((a, b) => a - b) // o(n log n)

  sortedSet.forEach((a, i) => {
    map.set(a, i) // o(n)
  })

  return arr.map((e) => map.get(e)!) // o(n)
}
