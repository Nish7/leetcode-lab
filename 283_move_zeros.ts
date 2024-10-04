function moveZeroes(nums: number[]): void {
	if (nums.length < 1) return;

	let writePointer = 0;

	for (let i = 0; i < nums.length; i++) {
		let val = nums[i];

		nums[i] = 0;

		if (val !== 0) {
			nums[writePointer] = val;
			writePointer++;
		}
	}
}

moveZeroes([2, 1]);
