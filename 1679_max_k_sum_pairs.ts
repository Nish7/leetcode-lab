// Approach: use similar approach as two sum to calculate the two sum, but keep it running
// another caveat is to use a counter for the occurences, for which we have to increment or decrement depending.
function maxOperations(nums: number[], k: number): number {
	const map = new Map<number, number>();
	let counter = 0;

	for (let i = 0; i < nums.length; i++) {
		const valRequired = k - nums[i];
		let valFromMap = map.get(valRequired);

		if (valFromMap) {
			map.set(valRequired, valFromMap - 1);
			counter++;
			continue;
		}

		let numExists = map.get(nums[i]);
		map.set(nums[i], numExists ? numExists + 1 : 1);
	}

	return counter;
}
