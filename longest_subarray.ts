function longestSubarray(nums: number[]): number {
	let leftPointer = 0;
	let rightPointer = 0;
	let zeros = 1;

	while (rightPointer < nums.length) {
		if (nums[rightPointer] == 0) zeros--;

		if (zeros < 0) {
			if (nums[leftPointer] == 0) zeros++;

			leftPointer++;
			rightPointer++;
			continue;
		}

		rightPointer++;
	}

	return rightPointer - leftPointer - 1;
}

console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([1, 1, 1]));
//  l     r
// [1,1,0,1] => [1,1,1]

//  l    r
// [1,1,1] => 2

//    l           r
// [0,1,1,1,0,1,1,0,1]
//
