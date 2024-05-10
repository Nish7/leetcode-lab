// naive approach: is a brute force approach which is going to be a O(n^2)
// approach: usage of a map which is going to store/record val which is needed

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const needed = target - val;

    const idx = map.get(needed);

    if (idx != undefined) {
      return [i, idx];
    }

    map.set(val, i);
  }

  throw new Error("Nothing found buddy");
}

console.log(twoSum([2, 7, 11, 15], 9)); // should return [0,1]
