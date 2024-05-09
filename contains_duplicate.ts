import assert from "assert";

function containsDuplicate(nums: number[]): boolean {
  const set = new Set();

  for (let i of nums) {
    set.add(i);
  }

  if (set.size != nums.length) return true;

  return false;
}

// tests
assert.equal(containsDuplicate([1, 2, 3, 1]), true);
assert.equal(containsDuplicate([1, 2, 3, 4]), false);
assert.equal(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
