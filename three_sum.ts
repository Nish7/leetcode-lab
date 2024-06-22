// from the hint: we deal with one x and then assume rest of the array is two sum problem
// basically loops through each array and for each element, e if the 0 - e = -e is the target value
// and tries to find the two number
// this solution below: works but time limit execedded
function threeSum(nums: number[]): number[][] {
  const set = new Set<string>();

  for (let i = 0; i < nums.length - 1; i++) {
    const x = nums[i];
    const t = 0 - x;

    const hash = new Map<number, number>();

    for (let y = i + 1; y < nums.length; y++) {
      const g = hash.get(t - nums[y]);

      if (g == null) {
        hash.set(nums[y], y);
        continue;
      }

      set.add([x, t - nums[y], nums[y]].sort((a, b) => a - b).join(";"));
    }
  }

  return [...set.values()].map((x) => x.split(";").map((y) => parseInt(y)));
}

threeSum([-1, 0, 1, 2, -1, -4]);
