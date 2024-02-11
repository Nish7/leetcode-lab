// Approach: is get the first window sum and and init the max Average with the that sum. after that,i will use a sliding window, using two pointer, basically a left one and right one to move in a fixed window. by removing the first one from the last window and adding the first one to the new window to the running sum and will calcualte the avergae on each run/iteration and will keep the record of max avg value.
function findMaxAverage(nums: number[], k: number): number {
	let runningSum = 0;

	// get the first window sum
	for (let i = 0; i < k; i++) {
		runningSum += nums[i];
	}

	let leftPointer = 1;
	let max = runningSum / k;

	for (let rightPointer = k; rightPointer < nums.length; rightPointer++) {
		runningSum -= nums[leftPointer - 1];
		runningSum += nums[rightPointer];

		max = Math.max(max, runningSum / k);

		leftPointer++;
	}

	return max;
}

findMaxAverage([1, 1, 2, 4, 5, 6], 4);
