// 128. Longest Consecutive Sequence

//  l h
// [0,1,2,3,2,3,4,5]  => 4
// cannot sort because that would be O(n log n)
// how can we handle reps
// Approach: ad hoc
// go thorugh each element and if the element has is not starting thus, doesnt have a left element
// if doesnt then, do a while loop go thorugh each element consequtivlee

function longestConsecutive(nums: number[]): number {
  const s = new Set(nums);
  let max = 0;

  for (let n of nums) {
    if (s.has(n - 1)) continue;

    // it is start of a sequence
    let seq = 1;
    while (s.has(n + seq)) {
      seq++;
    }

    max = Math.max(seq, max);
  }

  return max;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
