function pivotIndex(nums: number[]): number {
	let leftSum = [0];
	let rightSum: number[] = [];

	// left sum
	for (let i = 1; i < nums.length; i++) {
		leftSum[i] = leftSum[i - 1] + nums[i - 1];
	}

	for (let i = nums.length - 1; i >= 0; i--) {
		if (i == nums.length - 1) {
			rightSum[i] = 0;
			continue;
		}

		rightSum[i] = rightSum[i + 1] + nums[i + 1];
	}

	for (let i = 0; i < leftSum.length; i++) {
		if (leftSum[i] == rightSum[i]) return i;
	}

	return -1;
}

function pivotIndex_b(nums: number[]): number {
	const sum = nums.reduce((acc, i) => acc + i, 0);
	let left = nums[0];

	for (let i = 1; i < nums.length; i++) {
		const right = sum - left - nums[i];
		if (left == right) return i;
		left += nums[i];
	}

	return -1;
}
