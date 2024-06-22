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

// Strategy 2: similar to the previous one, except pick a number, x and then sort the rest of the array
// first sort the array
// [-4, -1, -1, 0 , 1, 2]
// then pick a number and implement the the two sum with the sorted array
// without hashmap
// 4
// -1 2 = 1
// -1 2 = 1
// 0 2 = 2
// 1 2 = 3

// 1
// -1 2 = 1
// 0 2 = 2
// 0 1 = 1

// 1
// 0 2 = 2
// 1 2 = 3

// do n^2 in o(1) space
function threeSum_b(nums: number[]): number[][] {
  const set = new Set<string>();
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length - 1; i++) {
    const x = nums[i];
    const target = 0 - x;

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const total = nums[left] + nums[right];

      if (total == target) {
        set.add([x, nums[left], nums[right]].sort((a, b) => a - b).join(";"));
        left++;

        while (left < right && nums[left] == nums[right]) {
          // another loop to remove the duplicate number
          left++;
        }
      } else if (total > target) {
        right--;
      } else if (total < target) {
        left++;
      }
    }
  }

  return [...set.values()].map((e) => e.split(";").map((x) => parseInt(x)));
}

console.log(threeSum_b([-1, 0, 1, 2, -1, -4]));
