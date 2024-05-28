// 167. Two Sum II - Input array is sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Approach: Two pointers
// two pointers approach is used to solve this problem. We will use two pointers, left and right. We will start from the left and right end of the array. If the sum of the elements at the left and right pointers is equal to the target, we will return the indices of the elements. If the sum is less than the target, we will move the left pointer to the right. If the sum is greater than the target, we will move the right pointer to the left. We will continue this process until we find the target sum.
//
//
// [2, 3, 4, 7, 8] -- target = 9

function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length - 1; i++) {
    const t = target - numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      if (t == numbers[j]) return [i + 1, j + 1];
      if (numbers[j] > t) break;
    }
  }

  throw Error("No solution found");
}

// time complexity: o(n^2)
// space complexity: o(1)

// different approach
function twoSum_b(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const t = numbers[left] + numbers[right];
    if (t == target) return [right + 1, left + 1];
    if (t > target) right--;
    else left++;
  }

  throw Error("No Solution Found");
}

// time complexity: o(n)
// space complexity: o(1) (excluding output space)

console.log(twoSum_b([2, 3, 4, 7, 8], 9));
console.log(twoSum_b([2, 3, 4], 6));
console.log(twoSum_b([-1, 0], -1));
