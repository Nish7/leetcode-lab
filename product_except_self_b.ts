// approach:

// Example 1:
//
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Left:  [1, 1, 2, 6]
// Right: [24, 12, 4, 1]
// Example 2:
//
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function productExceptSelf(nums: number[]): number[] {
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      left.push(1);
      continue;
    }

    left.push(left[i - 1] * nums[i - 1]);
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i == nums.length - 1) {
      right[i] = 1;
      continue;
    }

    right[i] = right[i + 1] * nums[i + 1];
  }
}

productExceptSelf([1, 2, 3, 4]);
