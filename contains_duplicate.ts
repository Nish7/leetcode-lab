import assert from "assert";

function containsDuplicate(nums: number[]): boolean {
  const set = new Set();

  for (let i of nums) {
    set.add(i);
  }

  if (set.size != nums.length) return true;

  return false;
}

// simpler solution -  https://leetcode.com/problems/contains-duplicate/solutions/1818765/short-only-2-lines-sweet-typescript-solution-top-1-speed/
// function containsDuplicateA(nums: number[]): boolean {
//   const set = new Set<number>(nums);
//   return set.size < nums.length;
// }

// tests
assert.equal(containsDuplicate([1, 2, 3, 1]), true);
assert.equal(containsDuplicate([1, 2, 3, 4]), false);
assert.equal(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
